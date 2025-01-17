'use strict';

const Joi = require('joi');
const { jobName, requiresValue } = require('../config/job');

const SCHEMA_WORKFLOW_GRAPH = Joi.object().keys({
    nodes: Joi.array().items(Joi.object().keys({
        name: requiresValue
    }).unknown()),
    edges: Joi.array().items(Joi.object().keys({
        src: requiresValue,
        dest: jobName
    }).unknown())
});

/**
 * The definition of the Workflow Graph pieces
 * @type {Object}
 */
module.exports = {
    workflowGraph: SCHEMA_WORKFLOW_GRAPH
};
