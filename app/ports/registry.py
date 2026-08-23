import re
from typing import Dict, List, Optional
from app.ports.base import BasePortScraper
from app.ports.felixstowe import FelixstoweScraper
from app.ports.jnpt import JNPTScraper
from app.ports.mundra import MundraScraper


class PortRegistry:
    """Central registry of all supported port scrapers with multi-alias support (UUID, UN/LOCODE, slug)."""

    def __init__(self):
        self._scrapers: Dict[str, BasePortScraper] = {}
        # Auto-register core port scrapers
        self.register(JNPTScraper())
        self.register(MundraScraper())
        self.register(FelixstoweScraper())

    def register(self, scraper: BasePortScraper):
        """Registers a port scraper with all its common identifiers and aliases."""
        port_id = scraper.metadata.port_id
        self._scrapers[port_id] = scraper

        # UN/LOCODE aliases
        unlocode = scraper.metadata.unlocode.lower()
        self._scrapers[unlocode] = scraper
        self._scrapers[unlocode.upper()] = scraper

        # Specific port UUIDs & Slugs
        if "jnpt" in port_id or "jnpa" in port_id:
            self._scrapers["jnpt"] = scraper
            self._scrapers["jnpa"] = scraper
            self._scrapers["in_jnpt"] = scraper
            self._scrapers["in_jnpa"] = scraper
            self._scrapers["innsa"] = scraper
            self._scrapers["INNSA"] = scraper
            self._scrapers["jnpanhavasheva"] = scraper
            self._scrapers["jnptnhavasheva"] = scraper
            self._scrapers["3be5c768-cfd4-4456-96d5-ee7f64c54b0b"] = scraper
        elif "mundra" in port_id:
            self._scrapers["mundra"] = scraper
            self._scrapers["in_mundra"] = scraper
            self._scrapers["inmun"] = scraper
            self._scrapers["INMUN"] = scraper
            self._scrapers["mundraport"] = scraper
            self._scrapers["aa346ff1-8c7e-4a8c-9ad4-445295852f8d"] = scraper
        elif "felixstowe" in port_id:
            self._scrapers["felixstowe"] = scraper
            self._scrapers["gb_felixstowe"] = scraper
            self._scrapers["gbfxt"] = scraper
            self._scrapers["GBFXT"] = scraper
            self._scrapers["portoffelixstowe"] = scraper
            self._scrapers["port_of_felixstowe"] = scraper
            self._scrapers["port-of-felixstowe"] = scraper
            self._scrapers["edc8c940-2fa3-4c7f-ada4-eab570dc7977"] = scraper

    def get(self, identifier: str) -> Optional[BasePortScraper]:
        """Retrieves a port scraper by its port_id, UUID, UN/LOCODE, or name slug."""
        if not identifier:
            return None
        cleaned = identifier.strip().lower()
        if cleaned in self._scrapers:
            return self._scrapers[cleaned]
        if identifier.strip() in self._scrapers:
            return self._scrapers[identifier.strip()]
        if identifier.strip().upper() in self._scrapers:
            return self._scrapers[identifier.strip().upper()]

        alpha_clean = re.sub(r"[^a-z0-9]", "", cleaned)
        if alpha_clean in self._scrapers:
            return self._scrapers[alpha_clean]

        # Substring / metadata matching fallback
        for s in self.list_all():
            meta_name_clean = re.sub(r"[^a-z0-9]", "", s.metadata.name.lower())
            meta_full_clean = re.sub(r"[^a-z0-9]", "", s.metadata.full_name.lower())
            if (
                s.metadata.port_id.lower() == cleaned
                or s.metadata.unlocode.lower() == cleaned
                or alpha_clean == meta_name_clean
                or alpha_clean in meta_full_clean
                or meta_name_clean in alpha_clean
                or cleaned in s.metadata.name.lower()
            ):
                return s
        return None

    def list_all(self) -> List[BasePortScraper]:
        """Returns unique registered port scrapers."""
        seen = set()
        unique_list = []
        for s in self._scrapers.values():
            if s.metadata.port_id not in seen:
                seen.add(s.metadata.port_id)
                unique_list.append(s)
        return unique_list

    def list_port_ids(self) -> List[str]:
        """Returns all registered canonical port_id strings."""
        return [s.metadata.port_id for s in self.list_all()]


# Singleton instance
port_registry = PortRegistry()
