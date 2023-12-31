import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Card, Form, Button} from "react-bootstrap";
import {useState} from "react";


const Profile = () => {
    const [fullName, setFullName] = useState('')
    const [cityId, setCityId] = useState(0)
    const [districtId, setDistrictId] = useState(0)
    const [placeOfBirthId, setPlaceOfBirthId] = useState(0)
    const [birthOfYear, setBirthOfYear] = useState('')
    const [ literacyId, setLiteracyId] = useState(0)
    const [specializedId, setSpecializedId] = useState(0)
    const [positionId, setPositionId] = useState(0)
    const [fieldOfWorkIds, setFieldOfWorkIds] = useState([])


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

    const positionKD =[
        {id: 1,
            value: 'Giám đốc kinh doanh'
        },
        {id: 2,
            value: 'Nhân viên kinh doanh'
        },
    ]

    const positionCNTN =[
        {id: 1,
            value: 'Frontend Develop'
        },
        {id: 2,
            value: 'Backend Develop'
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
                                        <Form.Control required type='text' placeholder='Họ và tên' defaultValue={fullName} onChange={event => setFullName(event.target.value)}/>
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
                                            <Form.Select required defaultValue={cityId} onChange={event => setCityId(event.target.value)}>
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
                                            <Form.Select required disabled={cityId.toString() === '0'} defaultValue={districtId} onChange={event => setDistrictId(event.target.value)}>
                                                <option value='0'>Quận/Huyện</option>
                                                {cityId.toString() === '1'? districtHCM.map(item => {
                                                    return <option key={item.id} value={item.id}>{item.value}</option>
                                                }) : districtDN.map(item => {
                                                    return <option key={item.id} value={item.id}>{item.value}</option>
                                                })
                                                }
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
                                        <Form.Select required defaultValue={placeOfBirthId} onChange={event => setPlaceOfBirthId(event.target.value)}>
                                            <option value='0'>Tỉnh/Thành</option>
                                            {city.map(item => {
                                                return <option key={item.id} value={item.id}>{item.value}</option>
                                            })
                                            }
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='birthOfYear' >
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Năm sinh</Form.Label>
                                </Col>
                                <Col >
                                    <Form.Control required type='number' placeholder='Năm sinh' defaultValue={birthOfYear} onChange={event => setBirthOfYear(event.target.value)}/>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='literacy'>
                            <Row>
                                <Col xs={4}>
                                    <Form.Label>Trình độ học vấn</Form.Label>
                                </Col>
                                <Col>
                                    <Form.Select required defaultValue={literacyId} onChange={event => setLiteracyId(event.target.value)}>
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
                                    <Form.Select required defaultValue={specializedId} onChange={event => setSpecializedId(event.target.value)}>
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
                                    <Form.Select required defaultValue={positionId} disabled={specializedId.toString() === '0'} onChange={event => setPositionId(event.target.value)}>
                                        <option value='0'>Chức danh công việc</option>
                                        {specializedId.toString() === '1'? positionKD.map(item => {
                                            return <option key={item.id} value={item.id}>{item.value}</option>
                                        }) : positionCNTN.map(item => {
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
                                    <Form.Select multiple required defaultValue={fieldOfWorkIds} onChange={event => setFieldOfWorkIds(event.target.value)}>
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
