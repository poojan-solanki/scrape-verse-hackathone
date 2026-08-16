# How to set up Bright Data with Pica

> **Official Source**: [https://docs.brightdata.com/integrations/pica](https://docs.brightdata.com/integrations/pica)
> **Category**: `general`

---

Integrate Bright Data with Pica to give AI agent workflows reliable, anonymous web access and scalable data collection from the public web. Spans 195 countries.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

[Pica](https://www.picaos.com/) is a platform designed to enhance AI agent workflows by providing reliable, anonymous, and scalable web access for real-world data automation. Integrating Pica with Bright Data allows AI agents to leverage Bright Data's advanced web scraping and proxy network capabilities, enabling them to collect and process data from the web efficiently and effectively.

## Available Bright Data Tools

Bright Data offers the following tools for integration with Pica:

* **Scrapers**: Automate web data extraction with Bright Data's powerful Scrapers.
* **Web Unlocker API**: Access and retrieve data from websites that employ advanced anti-bot measures.

## How to Integrate Bright Data With Pica

<Steps>
  <Step title="Obtain Your Bright Data API Key">
    * Log in to your [Bright Data dashboard](https://brightdata.com/cp).
    * Go to [Account Settings](https://brightdata.com/cp/setting/users).
    * [Generate an API key](/api-reference/authentication#how-do-i-authenticate-with-api-key%3F) if you haven't already done so.
  </Step>

  <Step title="Install the Bright Data Integration">
    Install the Bright Data integration package for Pica by running the following command:

    ```sh theme={null}
    pip install pica-langchain
    ```

    <Note>
      Other available integrations include:

      * [Vercel AI SDK](https://docs.picaos.com/sdk/vercel-ai)
      * [MCP](https://docs.picaos.com/sdk/mcp)
    </Note>
  </Step>

  <Step title="Select your preferred Bright Data tool">
    [Pica connectors](https://www.picaos.com/community/connectors) for Bright Data include two main tools for integration:

    <CodeGroup>
      ```python Scrapers endpoint using Pica With LangChain theme={null}
      import os
      from langchain_openai import ChatOpenAI
      from langchain.agents import AgentType
      from pica_langchain import PicaClient, create_pica_agent
      from pica_langchain.models import PicaClientOptions

      def main():
        try:
            pica_client = PicaClient(
                secret=os.environ["PICA_SECRET"],
                options=PicaClientOptions(
                    connectors=["test::bright-data::default::fd583f2344fa414293bdda4f240258c1"] # Initialize all available connections or pass specific connector keys
                )
            )

            pica_client.initialize()
            
            llm = ChatOpenAI(
                temperature=0,
                model="gpt-4o",
            )

            # Create an agent with Pica tools
            agent = create_pica_agent(
                client=pica_client,
                llm=llm,
                agent_type=AgentType.OPENAI_FUNCTIONS,
            )

            # Execute a multi-step workflow using the GitHub Connector
            result = agent.invoke({
                "input": (
                    "Trigger Synchronous Web Scraping and Retrieve Results, use this dataset ID : gd_l7q7dkf244hwjntr0 and search for this URL : https://www.amazon.com/dp/B0D2Q9397Y?th=1&psc=1"
                )
            })
            
            print(f"\nWorkflow Result:\n {result}")
        
        except Exception as e:
            print(f"ERROR: An unexpected error occurred: {e}")


      if __name__ == "__main__":
        main()

      ```

      ```python Web Unlocker API through Pica & LangChain theme={null}
      import os
      from langchain_openai import ChatOpenAI
      from langchain.agents import AgentType
      from pica_langchain import PicaClient, create_pica_agent
      from pica_langchain.models import PicaClientOptions

      def main():
        try:
            pica_client = PicaClient(
                secret=os.environ["PICA_SECRET"],
                options=PicaClientOptions(
                    connectors=["test::bright-data::default::fd583f2344fa414293bdda4f240258c1"] # Initialize all available connections or pass specific connector keys
                )
            )

            pica_client.initialize()
            
            llm = ChatOpenAI(
                temperature=0,
                model="gpt-4o",
            )

            # Create an agent with Pica tools
            agent = create_pica_agent(
                client=pica_client,
                llm=llm,
                agent_type=AgentType.OPENAI_FUNCTIONS,
            )

            # Execute a multi-step workflow using the GitHub Connector
            result = agent.invoke({
                "input": (
                    "Unlock this site and provide me with the data : https://www.amazon.com/dp/B0D2Q9397Y?th=1&psc=1"
                )
            })
            
            print(f"\nWorkflow Result:\n {result}")
        
        except Exception as e:
            print(f"ERROR: An unexpected error occurred: {e}")


      if __name__ == "__main__":
        main()
      ```
    </CodeGroup>
  </Step>
</Steps>
