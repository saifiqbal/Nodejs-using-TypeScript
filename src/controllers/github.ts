import { Worker } from "cluster";

const GitHub = require('@octokit/rest');

/**
 * GET /api/github
 * GitHub API Example.
 */
exports.getGithub = async (req, res, next) => {
    var data=req;
    const github = new GitHub();
    try {
      const { data: repo } = await github.repos.get({ owner: 'sahat', repo: 'hackathon-starter' });
      res.render('github/index',{
        repo
      });
    } catch (error) {
      next(error);
    }
  };