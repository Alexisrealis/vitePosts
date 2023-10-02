import React, { useState } from "react";
import { Typo } from '../../components/ui-components/Typo/index'
import { Container } from '../../components/ui-components/container/index'
import { Form } from "../../components/ui-components/Form";
import { Field } from "../../components/ui-components/Field/index";
import { Input } from "../../components/ui-components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui-components/Button";

export const RegistrationPage = () => {
    const [formValues, setFormValues] = useState({ name: '', surname: '', email: '', password: '' })
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const userId = Date.now()
        const newUser = { id: userId, ...formValues }
    
        try {
            const users = JSON.parse(localStorage.getItem('users'))

            if (!users) {
                localStorage.setItem('users', JSON.stringify([newUser]))
                alert('Вы успешно зарегистрировались!')
                navigate('/auth')
                return
            }

            if (users.find((user) => user.email === formValues.email)) {
                alert('Пользователь с таким именем уже существует!')
                return
            }

            users.push(newUser)
            localStorage.setItem('users', JSON.stringify(users))

            alert('Вы успешно зарегистрировались!')
            navigate('/auth')

        } catch (error) {
            console.log(error)
        }

    }

    const onChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value })
    }

    const disabled = !formValues.email || !formValues.password

    return (
        <Container>
            <Typo>Страница регистрации</Typo>
            <Form onSubmit={onSubmit}>
                <Field>
                    <Input
                        type="text"
                        name="name"
                        value={formValues.name}
                        placeholder="Имя"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="text"
                        name="surname"
                        value={formValues.surname}
                        placeholder="Фамилия"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="email"
                        name="email"
                        value={formValues.email}
                        placeholder="Email"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Field>
                    <Input
                        type="password"
                        name="password"
                        value={formValues.password}
                        placeholder="Пароль"
                        onChange={(e) => onChange(e.target.name, e.target.value)}
                    />
                </Field>
                <Button primary type="submit" disabled={disabled}>Регистрация</Button>
            </Form>
        </Container>
    )
}    