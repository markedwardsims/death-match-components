var testsContext = require.context("./js", true, /(spec|test)\.js$/i);
testsContext.keys().forEach(testsContext);