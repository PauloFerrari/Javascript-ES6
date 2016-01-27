"use strict";
describe('Register User', function() {
  it('Register User', function() {
    var VerifyForm = function VerifyForm() {
      this._valid = true;
    };
    ($traceurRuntime.createClass)(VerifyForm, {
      setForm: function(form) {
        this._form = form;
      },
      isValid: function() {
        this.verifyName(this._form.name);
        this.verifyEmail(this._form.email);
        this.verifyPassword(this._form.password, this._form.confirmPassword);
        return this._valid;
      },
      verifyName: function(name) {
        if (!name) {
          $('input.name').parent('div').addClass('has-error');
          this._valid = false;
        } else {
          $('input.name').parent('div').removeClass('has-error');
        }
      },
      verifyEmail: function(email) {
        var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(email)) {
          $('input.email').parent('div').addClass('has-error');
          this._valid = false;
        } else {
          $('input.email').parent('div').removeClass('has-error');
        }
      },
      verifyPassword: function(password, confirmPassword) {
        if (!Object.is(password, confirmPassword) || !password || !confirmPassword) {
          $('input.password').parent('div').addClass('has-error');
          $('input.confirmPassword').parent('div').addClass('has-error');
          this._valid = false;
        } else {
          $('input.password').parent('div').removeClass('has-error');
          $('input.confirmPassword').parent('div').removeClass('has-error');
        }
      }
    }, {});
    var CreateObjectForm = function CreateObjectForm() {
      this._form = {
        name: $('input.name').val(),
        email: $('input.email').val(),
        password: $('input.password').val(),
        confirmPassword: $('input.confirmPassword').val()
      };
    };
    ($traceurRuntime.createClass)(CreateObjectForm, {getObject: function() {
        return this._form;
      }}, {});
    $(document).ready(function() {
      $('.button-send').on('click', function() {
        var form = new CreateObjectForm().getObject();
        var verifyForm = new VerifyForm();
        verifyForm.setForm(form);
        alert(verifyForm.isValid());
      });
      $('input.name').on('keyup', function() {
        var verifyFields = new VerifyForm();
        verifyFields.verifyName($(this).val());
      });
      $('input.email').on('keyup', function() {
        var verifyFields = new VerifyForm();
        verifyFields.verifyEmail($(this).val());
      });
    });
    expect('a').toBe('a');
  });
});

//# sourceMappingURL=RegisterUser_ES6.js.map
