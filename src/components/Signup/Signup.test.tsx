/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Signup from "./Signup";

interface typeInputFormType{
    email?: string, 
    password?: string, 
    confirmPassword?: string
}

const typeInputForm = ({email, password, confirmPassword}: typeInputFormType) => {
    const emailInputEl: HTMLFormElement = screen.getByRole("textbox", {
        name: /email/i  // Matching Label value
    });
    const passwordInputEl: HTMLFormElement = screen.getByLabelText("Password");
    const confirmPasswordInputEl: HTMLFormElement = screen.getByLabelText(/confirm password/i);

    if(email){
        userEvent.type(emailInputEl, email);
    }
    if(password){
        userEvent.type(passwordInputEl, password);
    }
    if(confirmPassword){
        userEvent.type(confirmPasswordInputEl, confirmPassword);
    }
    return { emailInputEl, passwordInputEl, confirmPasswordInputEl }
}
const clickOnsubmit = () => {
    const submitBtnElement = screen.getByRole("button", {
        name: /submit/i
    })
    userEvent.click(submitBtnElement);
}

describe("Signup", () => {
    beforeEach(() => {
        render(<Signup />);
    })

    describe("Basic", () => {
        test("inputs should be initially empty",  () => {
            const emailInputEl: HTMLFormElement = screen.getByRole("textbox", {
                name: /email/i  // Matching Label value
            });
            const passwordInputEl: HTMLFormElement = screen.getByLabelText("Password");
            const confirmPasswordInputEl: HTMLFormElement = screen.getByLabelText(/confirm password/i);
    
            expect(emailInputEl.value).toBe("");
            expect(passwordInputEl.value).toBe("");
            expect(confirmPasswordInputEl.value).toBe("");
        })
        test("should be able to type an email", () => {
            const {emailInputEl} = typeInputForm({ email: "jehyunjung@gmail.com"})
            expect(emailInputEl.value).toBe("jehyunjung@gmail.com")
        })
        test("should be able to type an password", () => {
            const {passwordInputEl} = typeInputForm({ password: "password1234"})
            expect(passwordInputEl.value).toBe("password1234")
        })
        test("should be able to type an confirm password", () => {
            const {confirmPasswordInputEl} = typeInputForm({ confirmPassword: "password1234"})
            expect(confirmPasswordInputEl.value).toBe("password1234")
        })
    })

    describe("Error Handling", (() => {
        test("should show email error message on invalid email", () => {
            const displayingErrorEl = screen.queryByText(/the email you input in invaild/i);
            expect(displayingErrorEl).not.toBeInTheDocument();

            typeInputForm({email: "jehyunjung@"})
            clickOnsubmit();

            const displayingErrorElAgain = screen.queryByText(/the email you input in invaild/i);
            expect(displayingErrorElAgain).toBeInTheDocument();
        })
        test("should show password error message if password is less than 5 characters", () => {
            const displayingErrorEl = screen.queryByText(/the password you entered should contain 5 or more characters/i);
            expect(displayingErrorEl).not.toBeInTheDocument();

            typeInputForm({email: "jehyunjung@gmail.com", password: "1234"})
            clickOnsubmit();

            const displayingErrorElAgain = screen.queryByText(/the password you entered should contain 5 or more characters/i);
            expect(displayingErrorElAgain).toBeInTheDocument();
        })
        test("should show confirm password error if password don't match", () => {
            const displayingErrorEl = screen.queryByText(/the passwords don't match. try again/i);
            expect(displayingErrorEl).not.toBeInTheDocument();

            typeInputForm({email: "jehyunjung@gmail.com", password: "12345", confirmPassword: "1234"})
            clickOnsubmit();

            const displayingErrorElAgain = screen.queryByText(/the passwords don't match. try again/i);
            expect(displayingErrorElAgain).toBeInTheDocument();
        })
        test("should show no error message if every input is valid", () => {
            typeInputForm({email: "jehyunjung@gmail.com", password: "12345", confirmPassword: "12345"})
            clickOnsubmit();

            const displayingErrorElEmail = screen.queryByText(/the email you input in invaild/i);
            const displayingErrorElPassword = screen.queryByText(/the password you entered should contain 5 or more characters/i);
            const displayingErrorElConfirmPassword = screen.queryByText(/the passwords don't match. try again/i);

            expect(displayingErrorElEmail).not.toBeInTheDocument();
            expect(displayingErrorElPassword).not.toBeInTheDocument();
            expect(displayingErrorElConfirmPassword).not.toBeInTheDocument();

        })
    }))
})