/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CancelProductOrderCreateEvent
   * Example of a client listener for receiving the notification CancelProductOrderCreateEvent
   *
   * cancelProductOrderCreateEvent CancelProductOrderCreateEvent CancelProductOrder create Event payload
   * no response value expected for this operation
   **/
  const cancelProductOrderCreateEvent =  ( args, context /* cancelProductOrderCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "cancelProductOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("cancelProductOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelProductOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification CancelProductOrderInformationRequiredEvent
   *
   * cancelProductOrderInformationRequiredEvent CancelProductOrderInformationRequiredEvent CancelProductOrder informationRequired Event payload
   * no response value expected for this operation
   **/
  const cancelProductOrderInformationRequiredEvent =  ( args, context /* cancelProductOrderInformationRequiredEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "cancelProductOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("cancelProductOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CancelProductOrderStateChangeEvent
   * Example of a client listener for receiving the notification CancelProductOrderStateChangeEvent
   *
   * cancelProductOrderStateChangeEvent CancelProductOrderStateChangeEvent CancelProductOrder stateChange Event payload
   * no response value expected for this operation
   **/
  const cancelProductOrderStateChangeEvent =  ( args, context /* cancelProductOrderStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "cancelProductOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("cancelProductOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOrderAttributeValueChangeEvent
   *
   * productOrderAttributeValueChangeEvent ProductOrderAttributeValueChangeEvent ProductOrder attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const productOrderAttributeValueChangeEvent =  ( args, context /* productOrderAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderCreateEvent
   * Example of a client listener for receiving the notification ProductOrderCreateEvent
   *
   * productOrderCreateEvent ProductOrderCreateEvent ProductOrder create Event payload
   * no response value expected for this operation
   **/
  const productOrderCreateEvent =  ( args, context /* productOrderCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderDeleteEvent
   * Example of a client listener for receiving the notification ProductOrderDeleteEvent
   *
   * productOrderDeleteEvent ProductOrderDeleteEvent ProductOrder delete Event payload
   * no response value expected for this operation
   **/
  const productOrderDeleteEvent =  ( args, context /* productOrderDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderErrorMessageEvent
   * Example of a client listener for receiving the notification ProductOrderErrorMessageEvent
   *
   * productOrderErrorMessageEvent ProductOrderErrorMessageEvent ProductOrder errorMessage Event payload
   * no response value expected for this operation
   **/
  const productOrderErrorMessageEvent =  ( args, context /* productOrderErrorMessageEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderErrorMessageEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderErrorMessageEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderInformationRequiredEvent
   * Example of a client listener for receiving the notification ProductOrderInformationRequiredEvent
   *
   * productOrderInformationRequiredEvent ProductOrderInformationRequiredEvent ProductOrder informationRequired Event payload
   * no response value expected for this operation
   **/
  const productOrderInformationRequiredEvent =  ( args, context /* productOrderInformationRequiredEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderInformationRequiredEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderInformationRequiredEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderJeopardyAlertEvent
   * Example of a client listener for receiving the notification ProductOrderJeopardyAlertEvent
   *
   * productOrderJeopardyAlertEvent ProductOrderJeopardyAlertEvent ProductOrder jeopardyAlert Event payload
   * no response value expected for this operation
   **/
  const productOrderJeopardyAlertEvent =  ( args, context /* productOrderJeopardyAlertEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderJeopardyAlertEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderJeopardyAlertEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderMilestoneEvent
   * Example of a client listener for receiving the notification ProductOrderMilestoneEvent
   *
   * productOrderMilestoneEvent ProductOrderMilestoneEvent ProductOrder milestone Event payload
   * no response value expected for this operation
   **/
  const productOrderMilestoneEvent =  ( args, context /* productOrderMilestoneEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderMilestoneEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderMilestoneEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOrderStateChangeEvent
   * Example of a client listener for receiving the notification ProductOrderStateChangeEvent
   *
   * productOrderStateChangeEvent ProductOrderStateChangeEvent ProductOrder stateChange Event payload
   * no response value expected for this operation
   **/
  const productOrderStateChangeEvent =  ( args, context /* productOrderStateChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "productOrderStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("productOrderStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

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
