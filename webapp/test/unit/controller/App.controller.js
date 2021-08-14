/*global QUnit*/

sap.ui.define([
	"firstapp/controller/App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("Test match functions", function (assert) {
		assert.strictEqual("A", "A", "A matches A");
		assert.strictEqual("B", "B", "B matches B");
		assert.strictEqual("C", "C", "C matches C");
	});

});
