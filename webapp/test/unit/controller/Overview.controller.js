/*global QUnit*/

sap.ui.define([
	"firstapp/controller/Overview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Overview Controller");

	QUnit.test("I should test the Overview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

	QUnit.test("Test if A matches A", function (assert) {
		assert.strictEqual("A", "A", "A matches A");
		assert.strictEqual("B", "B", "B matches B");
		assert.strictEqual("C", "C", "C matches C");
	});

	QUnit.test("Test if D matches D", function (assert) {
		assert.strictEqual("D", "D", "D matches D");
	});

    QUnit.test("Test logic function", function (assert) {
        var oAppController = new Controller();
		oAppController.someTest();
		assert.ok(oAppController);
	});    

});
