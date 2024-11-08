/**
 * The NotificationListenerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenerService');
const cancelProductOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelProductOrderCreateEvent);
};

const cancelProductOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelProductOrderInformationRequiredEvent);
};

const cancelProductOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.cancelProductOrderStateChangeEvent);
};

const productOrderAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderAttributeValueChangeEvent);
};

const productOrderCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderCreateEvent);
};

const productOrderDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderDeleteEvent);
};

const productOrderErrorMessageEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderErrorMessageEvent);
};

const productOrderInformationRequiredEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderInformationRequiredEvent);
};

const productOrderJeopardyAlertEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderJeopardyAlertEvent);
};

const productOrderMilestoneEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderMilestoneEvent);
};

const productOrderStateChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.productOrderStateChangeEvent);
};


module.exports = {
  cancelProductOrderCreateEvent,
  cancelProductOrderInformationRequiredEvent,
  cancelProductOrderStateChangeEvent,
  productOrderAttributeValueChangeEvent,
  productOrderCreateEvent,
  productOrderDeleteEvent,
  productOrderErrorMessageEvent,
  productOrderInformationRequiredEvent,
  productOrderJeopardyAlertEvent,
  productOrderMilestoneEvent,
  productOrderStateChangeEvent,
};
