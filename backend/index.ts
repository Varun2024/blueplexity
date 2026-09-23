import express from "express";
import { tavily } from "@tavily/core";

const client = tavily({ apiKey: process.env.TAVILY_API_KEY });

const app = express();

app.post("/blueplexity_ask", async (req, res) => {
  //step-01 get the query from the user
  const query = req.body.query;

  //step-02 make sure user access to hit the endpoint

  //step-03 check if we have web search indexed for a similar query

  //step-04 web search to gather resources
  const webSearchResult = await client.search(query, {
    searchDepth: "advanced",
  });

  const searchResponse = webSearchResult.results

  //step-05 do some context eng  on the prompt to make it more relevant to the user + web search results

  //step-06 hit the LLM with the prompt and get the response

  //step-07 eventually also stream back the sources and follow up questions (which we can get from another parallel LLM call)

  //step-08 close the event stream
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
