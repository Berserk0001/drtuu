#!/usr/bin/env node
"use strict";

import express from "express";
import {fetchImageAndHandle} from "./proxy3.js";

const app = express();


app.set('trust proxy', false);
app.disable("x-powered-by");

app.get("/", fetchImageAndHandle);
app.get("/favicon.ico", (req, res) => res.status(204).end());

export default app;
