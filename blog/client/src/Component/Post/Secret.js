import React from 'react'
import Form from 'react-bootstrap/Form';

const Secret = () => {
    return (
        <div>
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Check"
            />
            {['checkbox', 'radio'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                    />
                </div>
            ))}
        </div>

    )
}

export default Secret