import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Card, Form, Button} from "react-bootstrap";
import {useState} from "react";


const Profile = () => {
    const [defaultValue, setDefaultValue] = useState({
        fullName: '',
        city: 0,
        district: 0,
        placeOfBirth: 0,
        birthOfYear: '',
        literacy: 0,
        specialized: 0,
        fieldOfWork: [],
    })
    const [validated, setValidated] = useState(false);

    const city = [
        {id: 1,
            value: 'TP.Hồ Chí Minh'
        },
        {id: 2,
            value: 'Đồng Nai'
        }
    ]
    const districtHCM = [
        {id: 1,
            value: 'Q.Tân Phú'
        },
        {id: 2,
            value: 'Q.Tân Bình'
        },
        {id: 3,
            value: 'Q.Bình Tân'
        }
    ]
    const districtDN = [
        {id: 1,
            value: 'TP. Biên Hòa'
        },
        {id: 2,
            value: 'H.Long Thành'
        },
        {id: 3,
            value: 'H.Xuân Lộc'
        }
    ]

    const literacy = [
        {id: 1,
            value: 'Đại Học'
        },
        {id: 2,
            value: 'Cao Đẳng'
        },
        {id: 3,
            value: 'Trung Cấp'
        }
    ]

    const specialized = [
        {id: 1,
            value: 'Kinh doanh dịch vụ'
        },
        {id: 2,
            value: 'Công nghệ thông tin'
        },
    ]

    const fieldOfWork = [
        {id: 1,
            value: 'Thương Mại'
        },
        {id: 2,
            value: 'Dịch Vụ'
        },
        {id: 3,
            value: 'Sản Xuất'
        },
    ]
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <Container className="justify-center" style={{width: '60%'}}>
            <Card bg='light'>
                <Card.Header as='h1'>Thông tin cá nhân</Card.Header>
                <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className='mb-3' controlId='fullName'>
                                <Row>
                                    <Col xs={4}>
                                        <Form.Label>Họ và tên</Form.Label>
                                    </Col>
                                    <Col >
                                        <Form.Control required type='text' placeholder='Họ và tên'  defaultValue={defaultValue.fullName}/>
                                    </Col>
                                </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='currentAddress'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Nơi ở hiện tại</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Group className='mb-3' controlId='city'>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Label>Tỉnh/Thành</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Select required defaultValue={defaultValue.city} onChange={val => console.log(val)}>
                                                <option value='0'>Tỉnh/Thành</option>
                                                {city.map(item => {
                                                    return <option key={item.id} value={item.id}>{item.value}</option>
                                                })
                                                }
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    </Form.Group>
                                    <Form.Group className='mb-3' controlId='district'>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Label>Quận/Huyện</Form.Label>
                                        </Col>
                                        <Col>
                                            <Form.Select required disabled={defaultValue.city === 0} defaultValue={defaultValue.district}>
                                                <option value='0'>Quận/Huyện</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='placeOfBirth'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Quê quán</Form.Label>
                                </Col>
                                <Col>
                                        <Form.Select required defaultValue={defaultValue.placeOfBirth}>
                                            <option value='0'>Tỉnh/Thành</option>
                                            {city.map(item => {
                                                return <option key={item.id} value={item.id}>{item.value}</option>
                                            })
                                            }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='birthOfYear'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Năm sinh</Form.Label>
                                </Col>
                                <Col >
                                    <Form.Control required type='number' placeholder='Năm sinh' defaultValue={defaultValue.birthOfYear}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='literacy'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Trình độ học vấn</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select required defaultValue={defaultValue.literacy}>
                                        <option value='0'>Trình độ học vấn</option>
                                        {literacy.map(item => {
                                            return <option key={item.id} value={item.id}>{item.value}</option>
                                        })
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='specialized'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Chuyên ngành</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select required defaultValue={defaultValue.specialized}>
                                        <option value='0'>Chuyên ngành</option>
                                        {specialized.map(item => {
                                        return <option key={item.id} value={item.id}>{item.value}</option>
                                    })
                                    }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='specialized'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Chức danh công việc</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select defaultValue={defaultValue.specialized}>
                                        <option value='0'>Chức danh công việc</option>
                                        {specialized.map(item => {
                                            return <option key={item.id} value={item.id}>{item.value}</option>
                                        })
                                        }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='fieldOfWork'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Lĩnh vực làm việc</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select multiple required defaultValue={defaultValue.fieldOfWork}>
                                        {fieldOfWork.map(item => {
                                        return <option key={item.id} value={item.id}>{item.value}</option>
                                    })
                                    }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button type="submit">Save</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Profile
