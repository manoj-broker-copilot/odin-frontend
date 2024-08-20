import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Checkbox, Flex, Typography, Card } from "antd";
import type { CheckboxProps } from "antd";

// react hook form
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { InputField } from "@/components/Form";

// redux
import { useDispatch } from "react-redux";
import { setAuthToken, setUserDetails } from "@/store/slices/auth/authSlice";
import { AppDispatch } from "@/store";

const loginSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    password: yup.string().required("Password is required")
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const { Link, Text } = Typography;

const LoginForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    const onSubmit: SubmitHandler<LoginFormData> = async data => {
        /**
         * TODO: when integrated with real api token consume from api
         */
        dispatch(
            setAuthToken({
                token: "99d99sdf",
                refreshToken: "87788sdf"
            })
        );
        dispatch(setUserDetails({ email: data.username, name: data.username }));
        navigate("/app");
    };
    const onChange: CheckboxProps["onChange"] = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row gutter={12}>
                    <Col xs={24} md={24}>
                        <Label label="Username" />
                        <InputField size="large" name="username" control={control} error={errors.username?.message ?? ""} />
                    </Col>
                    <Col xs={24} md={24}>
                        <Label label="Password" />
                        <InputField type="password" size="large" name="password" control={control} error={errors.password?.message ?? ""} />
                    </Col>
                    <Col xs={24} md={24}>
                        <Flex style={{ marginBottom: "1.5rem" }} justify="space-between">
                            <Checkbox onChange={onChange} style={{ fontWeight: "500" }}>
                                Remember Me
                            </Checkbox>
                            <Link style={{ fontWeight: 500 }}>Forget Password?</Link>
                        </Flex>
                    </Col>

                    <Col xs={24} md={24}>
                        <Button type="primary" htmlType="submit" size="large" style={{ width: "100%" }}>
                            Login
                        </Button>
                    </Col>

                    <Col xs={24} md={24}>
                        <Flex style={{ marginTop: "1.5rem" }} justify="center">
                            <Text>
                                Not Registered Yet?{" "}
                                <Link style={{ fontWeight: "500" }} href="/auth/register">
                                    Create an account
                                </Link>
                            </Text>
                        </Flex>
                    </Col>
                </Row>
            </form>
        </Card>
    );
};

export default LoginForm;

const Label = ({ label }: { label: string }) => {
    return (
        <div className="form-label-wrap">
            <label style={{ fontWeight: 500, display: "inline-block", marginBottom: "5px" }}>{label}</label>
        </div>
    );
};
