# Set up Bright Data with Strands Agents

> **Official Source**: [https://docs.brightdata.com/integrations/strands](https://docs.brightdata.com/integrations/strands)
> **Category**: `ai-and-mcp`

---

Use Bright Data with Strands Agents to add reliable web scraping and proxy capabilities to open-source Python AI agent workflows.

<Card title="Building an AI startup?" href="https://brightdata.com/ai/ai-startups-program" icon="rocket-launch">
  You might be eligible for our Startup Program. Get fully funded access to the infrastructure you're reading about right now (up to \$20K value).
</Card>

Strands Agents is an open-source Python library that provides a unified toolkit for developing autonomous AI agents. It bridges the gap between large language models and practical applications by offering ready-to-use tools for file operations, system execution, API interactions, mathematical operations, and more.

## Steps to Get Started

<Steps>
  <Step title="Prerequisites">
    * Bright Data API Key
    * Python 3.10+
  </Step>

  <Step title="Installation">
    Set up the strands-agents-tools package by either using the quick pip install or the full development installation with virtual environment and pre-commit hooks.

    ```bash Quick Install theme={null}
    pip install strands-agents-tools
    ```
  </Step>

  <Step title="Set the environment variable">
    Set your Bright Data API key and unlocker zone as an environment variables:

    ```bash theme={null}
    export BRIGHT_DATA_API_KEY="your_api_key_here"
    export BRIGHT_DATA_ZONE="your_unlocker_zone_here"
    ```
  </Step>

  <Step title="Bright Data Usage Examples">
    <Tabs>
      <Tab title="Using bright data tools within an agent">
        <CodeGroup>
          ```py Sample Code theme={null}
          from strands import Agent
          from strands.models.litellm import LiteLLMModel
          import strands_tools.bright_data as bright_data
          import os
          from dotenv import load_dotenv


          load_dotenv()


          def main():
          load_dotenv()
          print("🔍 Testing Bright Data Tool with OpenAI GPT-4o via LiteLLM")
          print("=" * 50)

          # Configure OpenAI model via LiteLLM
          openai_model = LiteLLMModel(
              client_args={
                  "api_key": os.getenv("OPENAI_API_KEY"), 
              },
              model_id="openai/gpt-4o",
          )

          # Create agent with LiteLLM model and bright_data tool
          agent = Agent(
              model=openai_model,
              tools=[bright_data],
              system_prompt="you are a helpful Web Search assistant, whenever user asks you to search the web you will use avilable tools, always set zone name to 'unlocker'"
          )

          # Test the bright_data tool with a relevant query
          print("Testing web scraping...")
          result = agent("Please scrape the content from https://example.com and return it as markdown")
          print(f'\n\nScraping Result:\n{result}')

          print("\n" + "=" * 50)
          print("Testing web search...")
          result2 = agent("Please search Google for 'Python programming tutorials")
          print(f'\n\nSearch Result:\n{result2}')


          if __name__ == "__main__":
          main()
          ```

          ```md Sample Output theme={null}
          🔍 Testing Bright Data Tool with OpenAI GPT-4o via LiteLLM
          =================================================
          Testing web scraping...

          Tool #1: bright_data  
          [Bright Data] Request: https://example.com/  
          Here is the scraped content from [example.com](https://example.com/) in Markdown format:

          # Example Domain

          This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.

          [More information...](https://www.iana.org/domains/example)

          Scraping Result:  
          Here is the scraped content from [example.com](https://example.com/) in Markdown format:

          # Example Domain

          This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.

          [More information...](https://www.iana.org/domains/example)

          ==================================================
          Testing web search...

          Tool #2: bright_data  
          [Bright Data] Request: https://www.google.com/search?q=Python%20programming%20tutorials&num=10

          Here are some search results for "Python programming tutorials" from Google:
          1. **The Python Tutorial | Python documentation** - This is an official tutorial from the Python documentation introducing basic concepts and features of the Python language. [Link to tutorial](https://docs.python.org/3/tutorial/index.html).
          2. **Python Tutorial | W3Schools** - A popular platform to learn Python, covering everything from basic syntax to more advanced topics. Start learning Python now. [Link to W3Schools Python](https://www.w3schools.com/python/).
          3. **Python Full Course for Beginners | YouTube by Programming with Mosh** - A comprehensive YouTube tutorial to learn Python from scratch. [Watch on YouTube](https://www.youtube.com/watch?v=K5KVEU3aaeQ).
          4. **Python For Beginners | Python.org** - Contains a list of tutorials suitable for experienced programmers on the BeginnersGuide/Tutorials page. [Getting started with Python](https://www.python.org/about/gettingstarted/).
          5. **Learn Python - Free Interactive Python Tutorial** - An interactive coding environment provided by DataCamp to learn Python with hands-on challenges. [Explore LearnPython.org](https://www.learnpython.org).
          6. **Python Tutorial | TutorialsPoint** - Offers a complete understanding of Python programming language from basic concepts to more advanced. [Read more on TutorialsPoint](https://www.tutorialspoint.com/python/index.htm).
          7. **Python Tutorial | GeeksforGeeks** - Provides the latest Python 3.13 version compiler and tutorials, where you can edit and compile code directly. [Visit GeeksforGeeks Python Tutorial](https://www.geeksforgeeks.org/python/python-programming-language-tutorial/).

          These resources should help you get started with Python programming or deepen your existing knowledge.
          ```
        </CodeGroup>
      </Tab>

      <Tab title="Direct tool invocation">
        ```py theme={null}
        from strands import Agent
        from strands.models.litellm import LiteLLMModel
        import strands_tools.bright_data as bright_data
        import os
        from dotenv import load_dotenv


        load_dotenv()


        def main():
          load_dotenv()
          print("🔍 Testing Bright Data Tool with OpenAI GPT-4o via LiteLLM")
          print("=" * 50)
          
          # Configure OpenAI model via LiteLLM
          openai_model = LiteLLMModel(
              client_args={
                  "api_key": os.getenv("OPENAI_API_KEY"), 
              },
              model_id="openai/gpt-4o",
          )
          
          # Create agent with LiteLLM model and bright_data tool
          agent = Agent(
              model=openai_model,
              tools=[bright_data],
              system_prompt="you are a helpful Web Search assistant, whenever user asks you to search the web you will use avilable tools, always set zone name to 'unblocker'"
          )
          
          # Test the bright_data tool with a relevant query
          print("Testing web scraping...")
          result = agent.tool.bright_data(
          action="scrape_as_markdown",
          url="https://example.com",
          zone="unblocker"
        )
          print(f'\n\nScraping Result:\n{result}')
          
          print("\n" + "=" * 50)
          print("Testing web search...")
          result2 = agent.tool.bright_data(
          action="search_engine",
          query="Python programming tutorials",
          engine="google",
          zone="unblocker"
          )
          print(f'\n\nSearch Result:\n{result2}')


          result5 = agent.tool.bright_data(
              action="web_data_feed",
              source_type="amazon_product",
              url="https://www.amazon.com/dp/B0D2Q9397Y?th=1"
          )
          print(f'\n\nAmazon Product Data:\n{result5}')


        if __name__ == "__main__":
          main()
        ```
      </Tab>
    </Tabs>
  </Step>
</Steps>
