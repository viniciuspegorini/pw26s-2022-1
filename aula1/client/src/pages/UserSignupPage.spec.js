import { render } from "@testing-library/react";
import { UserSignupPage } from './UserSignupPage';

describe('UserSignupPage', () => {

    describe('Layout', () => {

        it('has header of Sign Up', () => {
            const { container } = render(<UserSignupPage />);
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        });

        it('has input for display name', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const displayNameInput = queryByPlaceholderText('Informe o seu nome');
            expect(displayNameInput).toBeInTheDocument();
        });

        it('has input for username', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const usernameInput = queryByPlaceholderText('Informe o usuário');
            expect(usernameInput).toBeInTheDocument();
        });

        it('has input for password', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const passwordInput = queryByPlaceholderText('Informe a sua senha');
            expect(passwordInput).toBeInTheDocument();
        });
        it('has password type for password input', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const passwordInput = queryByPlaceholderText('Informe a sua senha');
            expect(passwordInput.type).toBe('password');
        });

        it('has input for password repeat', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const passwordRepeatInput = queryByPlaceholderText('Confirme sua senha');
            expect(passwordRepeatInput).toBeInTheDocument();
        });
        it('has password type for password repeat input', () => {
            const { queryByPlaceholderText } = render(<UserSignupPage />);
            const passwordRepeat = queryByPlaceholderText('Confirme sua senha');
            expect(passwordRepeat.type).toBe('password');
        });

        it('has submit button', () => {
            const { container } = render(<UserSignupPage />);
            const button = container.querySelector('button');
            expect(button).toBeInTheDocument();
        });
    });


    describe('Interactions', () => {

    });
});