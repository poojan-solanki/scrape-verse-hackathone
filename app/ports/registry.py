from typing import Dict, List, Optional
from app.ports.base import BasePortScraper
from app.ports.jnpt import JNPTScraper
from app.ports.mundra import MundraScraper


class PortRegistry:
    """Central registry of all supported Indian port scrapers."""

    def __init__(self):
        self._scrapers: Dict[str, BasePortScraper] = {}
        # Auto-register core port scrapers
        self.register(JNPTScraper())
        self.register(MundraScraper())

    def register(self, scraper: BasePortScraper):
        """Registers a new port scraper plugin."""
        port_id = scraper.metadata.port_id
        self._scrapers[port_id] = scraper

    def get(self, port_id: str) -> Optional[BasePortScraper]:
        """Retrieves a port scraper by its port_id."""
        return self._scrapers.get(port_id)

    def list_all(self) -> List[BasePortScraper]:
        """Returns all registered port scrapers."""
        return list(self._scrapers.values())

    def list_port_ids(self) -> List[str]:
        """Returns all registered port_id strings."""
        return list(self._scrapers.keys())


# Singleton instance
port_registry = PortRegistry()
