describe('Register User', function () {

    it('Register User', function () {
        
        class VerifyForm {
            
            constructor(){
                this._valid = true;
            }

            setForm(form) {
                this._form = form;
            }

            isValid() {
                this.verifyName(this._form.name);
                this.verifyEmail(this._form.email);
                this.verifyPassword(this._form.password, this._form.confirmPassword);
                return this._valid;
            }

            verifyName(name) {
                if (!name) {
                    $('input.name').parent('div').addClass('has-error');
                    this._valid = false;
                } else {
                    $('input.name').parent('div').removeClass('has-error');
                }
            }

            verifyEmail(email) {
                var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!regex.test(email)) {
                    $('input.email').parent('div').addClass('has-error');
                    this._valid = false;
                } else {
                    $('input.email').parent('div').removeClass('has-error');
                }
            }

            verifyPassword(password, confirmPassword) {
                if (!Object.is(password, confirmPassword) || !password || !confirmPassword) {
                    $('input.password').parent('div').addClass('has-error');
                    $('input.confirmPassword').parent('div').addClass('has-error');
                    this._valid = false;
                } else {
                    $('input.password').parent('div').removeClass('has-error');
                    $('input.confirmPassword').parent('div').removeClass('has-error');
                }
            }

        }


        class CreateObjectForm {

            constructor() {
                this._form = {
                    name: $('input.name').val(),
                    email: $('input.email').val(),
                    password: $('input.password').val(),
                    confirmPassword: $('input.confirmPassword').val(),
                };
            }

            getObject() {
                return this._form;
            }

        }

        $(document).ready(function () {
            $('.button-send').on('click', function () {
                let form = new CreateObjectForm().getObject();
                let verifyForm = new VerifyForm();
                verifyForm.setForm(form);
                alert(verifyForm.isValid());

            });

            $('input.name').on('keyup', function () {
                let verifyFields = new VerifyForm();
                verifyFields.verifyName($(this).val());
            });
            
             $('input.email').on('keyup', function () {
                let verifyFields = new VerifyForm();
                verifyFields.verifyEmail($(this).val());
            })
            
        });

        expect('a').toBe('a');

    });

});