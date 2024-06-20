import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FloatingLabel, Row, Form, Col, Button } from 'react-bootstrap';
import formElements from './Models/form_elements';
import { useAppDispatch } from './redux/store/store';
import { addActivity } from './redux/features/activitySlice';
import {ActivityFields, classTransformer} from './Models/Activity';

export default function FormCompontent() {
    const [formValues, setFormValues] = useState<ActivityFields>({} as ActivityFields);
    const dispatch = useAppDispatch()

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues(prev => ({
            ...prev, 
            [id] : value
        }))
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(addActivity(classTransformer(formValues)))
        setFormValues({ } as ActivityFields); 
    };

    return (
        <Row>
            <Col lg={12} className='text-center'>
                <Form onSubmit={handleFormSubmit}>
                    {formElements.map((field, i) => (
                        <FloatingLabel
                            key={i}
                            className="mb-3"
                            label={field.placeHolder}
                        >
                            <Form.Control
                                type={field.type}
                                id={field.id}
                                value={formValues[field.id as keyof ActivityFields] || ""}
                                onChange={handleInputChange}
                            />
                        </FloatingLabel>
                    ))}

                    <Button type="submit" variant="outline-success" size="lg">
                        Submit!
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
