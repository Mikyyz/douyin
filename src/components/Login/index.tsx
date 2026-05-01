import { FC, useEffect, useMemo, useState } from "react";
import {
  Col,
  Divider,
  Modal,
  Row,
  Space,
  Typography,
  Form,
  Select,
  Button,
} from "@douyinfe/semi-ui";
import {
  IconCrossStroked,
  IconIndependentCornersStroked,
} from "@douyinfe/semi-icons";
import classnames from "classnames";
import { useLoginModalStore } from "@/store/useLoginModalStore";
import styles from "./index.module.scss";
import { useCountDown } from "@/hooks/useCountDown";

const { Text, Title } = Typography;

type LoginType = "sms" | "password";

export const LoginModal: FC = () => {
  const isLoginModalOpen = useLoginModalStore((s) => s.isLoginModalOpen);
  const loginModalTitle = useLoginModalStore((s) => s.loginModalTitle);
  const modalConfig = useLoginModalStore((s) => s.modalConfig);
  const { showCloseIcon = true, ...rest } = modalConfig;
  console.log('isLoginModalOpen>>', isLoginModalOpen);
  
  const [loginType, setLoginType] = useState<LoginType>("sms");
  // 是否为有效的手机号
  const [isValidPhone, setIsValidPhone] = useState(false);
  // 是否为有效的验证码
  const [isValidCode, setIsValidCode] = useState(false);
  // 密码是否为空
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(true);

  const { count, isCounting, startCountDown } = useCountDown(60);

  const onValueChange = (values: any, fields: any) => {
    if ("number" in fields) {
      const isValidPhoneNum = /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(
        values.number,
      );
      setIsValidPhone(isValidPhoneNum);
    } else if ("code" in fields) {
      setIsValidCode(/^[0-9]{6}$/.test(fields.code));
    } else if ("password" in fields) {
      // 去除空格后判断是否有值
      const password = fields.password.trim();
      setIsPasswordEmpty(password.length === 0);
    }
  };

  const isValid = useMemo(() => {
    const validators = {
      sms: isValidPhone && isValidCode,
      password: isValidPhone && !isPasswordEmpty,
    };
    return validators[loginType];
  }, [loginType, isValidPhone, isValidCode, isPasswordEmpty]);

  const handleClose = () => {
    useLoginModalStore.getState().closeLoginModal();
  };
  const handleGetCode = () => {
    if (!isCounting) {
      startCountDown();
    }
  };
  const formatterCode = (value: string | number): string => {
    // 限制在6位
    if (value.toString().length > 6) {
      return value.toString().slice(0, 6);
    }
    // 只能输入数字
    if (/\D/g.test(value.toString())) {
      return `${value}`.replace(/\D/g, "");
    }
    return String(value);
  };

  useEffect(() => {
    if (!isLoginModalOpen) {
      setLoginType("sms");
      setIsValidPhone(false);
      setIsValidCode(false);
      setIsPasswordEmpty(true);
    }
  }, [isLoginModalOpen]);

  return (
    <Modal
      width={726}
      visible={isLoginModalOpen}
      footer={null}
      header={null}
      centered
      motion={false}
      bodyStyle={{
        padding: "24px 24px 46px 24px",
      }}
      maskStyle={{
        background: "rgba(0, 0, 0, 0.8)",
      }}
      className={classnames(
        styles.loginModal,
        !rest.mask && styles.loginModalHideMask,
      )}
      {...rest}
    >
      <div className={styles.loginModalTitleWrapper}>
        <Title heading={3}>{loginModalTitle}</Title>
        {showCloseIcon && (
          <div className={styles.loginModalCloseIconWrapper}>
            <IconCrossStroked
              className={styles.loginModalCloseIcon}
              onClick={handleClose}
            />
          </div>
        )}
      </div>
      <Row className={styles.loginModalContent}>
        <Col span={12} className={styles.loginModalLeft}>
          <Text type="secondary" className={styles.loginModalQrCodeTitle}>
            扫码登录
          </Text>
          <div className={styles.loginModalQrCodeWrapper}>
            <img
              height={178}
              width={178}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEX///8AAABVwtN+AAACwElEQVR42uzcMZL6OgzHcTEUlBwhR8nRyNE4So5ASbGD3jiyFTk4uyle8cd8f9UyhM9WHsu2HCGEEEIIIYSQfz2jeu4ictKHpL9/0p+e+tMLAACgBZSPlwQM6ZM/OYtcVZ/L10ne/AIAoDdgSA9PF72fdV6eu+h01vtpZ5QBAAAcBfQpt/zc5gsAgK8BvALLg8mmLKvSAAAA/gK8zDvbRGRALPPKlPVXnQgA8MlAWP5vZ6ZB5brOTAf2DwAAvhmIyTNTAmydk3IrWwkHAgDwwUCp0rT85KqpLtNYpdny37eYAQAAWoBIAh7itV1VzelDbk8Z8yGNye8zEwBAD4AtYJZizM8ll0XOXXKVtv4TK9/eRyMAAMBm0JU1zVLmaZZ1GY0G7J7+AwB8PiAn2zKbLn4umfeV1ylrLL9aTjIBAACawLit+q5VNRemrAcAQN+A5nVOOaTxYiyNMpuyfFlkLTICAACwB4iUMu9lo3GqNtn0x4HGZhwAQB+ADRTNVdqQgNzwso4yzbK1Lo8vAACANmCtmOXE08q8BZjzF7Z/oOULAICOgVKlzeEsprSVqfebNfeVAQAAwl7aeuJZZqYq8fRft0seAIBOgHr5v21LzlPWWr5NO/3KAAAAYzjY1PXymObT/9BW9uvtAQCAPoDYPml7acskFXr3bS0ksZEZAABgr5VGzr7ICdWc92ju7WwDAHQEyPadMPYaiznckMnL/+ZFGAAAgLdbZXPV4z+ody8vVn3dDACgL6D14r2qdz+uhQAAAH4B6vdg5EP+chaT6r/1uvLeFU0AgE6AtxfvSQaG3G/mVZq2WiwBAAAaQHgPRjn9n0KTwNPflQEA0Dkwb7bM1k8nbys7MDMBAHwpEPbSynOx+d82pg/ViQAAnwxUL94rM1Pde1l69/0aMgAAwDtACCGEEEIIIf9//gsAAP//3V5zD8i5mqEAAAAASUVORK5CYII="
              alt=""
            />
          </div>
          <div className={styles.loginModalInfo}>
            <Text type="tertiary">打开</Text>
            <Text style={{ color: "var(--semi-color-primary)" }}>
              「抖音APP」
            </Text>
            <Text type="tertiary">点击左上角</Text>
            <IconIndependentCornersStroked
              className={styles.loginModalInfoIcon}
            />
            <Text type="tertiary">扫一扫</Text>
          </div>
          <div className={styles.loginModalInfoBtn}>
            <Text type="tertiary">如何扫码</Text>
          </div>
        </Col>
        <Col span={12} className={styles.loginModalRight}>
          <Space className={styles.loginModalRightHeader}>
            <Text
              className={classnames(
                styles.loginModalRightHeaderTitle,
                loginType === "sms" && styles.loginModalRightHeaderTitleActive,
              )}
              onClick={() => setLoginType("sms")}
            >
              验证码登录
            </Text>
            <Divider layout="vertical" margin="12px" />
            <Text
              className={classnames(
                styles.loginModalRightHeaderTitle,
                loginType === "password" &&
                  styles.loginModalRightHeaderTitleActive,
              )}
              onClick={() => setLoginType("password")}
            >
              密码登录
            </Text>
          </Space>
          <Form
            className={styles.loginModalForm}
            initValues={{
              prefix: "86",
              number: null,
              code: "",
            }}
            onValueChange={onValueChange}
          >
            <Form.InputGroup>
              <Form.Select field="prefix" style={{ height: "100%" }}>
                <Select.Option value="86">+86</Select.Option>
              </Form.Select>
              <Form.Input placeholder="请输入手机号" field="number" />
            </Form.InputGroup>
            {loginType === "sms" ? (
              <Form.InputNumber
                label={<></>}
                field="code"
                hideButtons
                placeholder="请输入验证码"
                formatter={formatterCode}
                suffix={
                  <Button
                    disabled={!isValidPhone}
                    theme="borderless"
                    className={classnames(
                      styles.loginModalCodeBtn,
                      isValidPhone && styles.loginModalCodeBtnActive,
                    )}
                    onClick={handleGetCode}
                  >
                    {!isCounting ? "获取验证码" : `${count}s`}
                  </Button>
                }
              />
            ) : (
              <Form.Input
                label={<></>}
                type="password"
                placeholder="请输入密码"
                field="password"
                mode="password"
                className={styles.loginModalPassword}
              />
            )}
            <Button
              htmlType="submit"
              size="large"
              theme="solid"
              className={styles.loginModalSubmitBtn}
              disabled={!isValid}
            >
              登录
            </Button>
            <div className={styles.loginModalAgreement}>
              <Text type="tertiary">登录即代表同意</Text>
              <Text
                className={styles.loginModalAgreementLink}
                link={{ href: "https://semi.design/" }}
              >
                {" "}
                用户协议{" "}
              </Text>
              <Text type="tertiary">和</Text>
              <Text
                className={styles.loginModalAgreementLink}
                link={{ href: "https://semi.design/" }}
              >
                {" "}
                隐私政策{" "}
              </Text>
            </div>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
};
