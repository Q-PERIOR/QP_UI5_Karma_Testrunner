sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("firstapp.controller.App", {
			onInit: function () {

			},

			someTest : function () {
				console.log("some test");
			}
		});
	});
