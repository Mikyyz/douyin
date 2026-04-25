import { FC } from 'react'
import { Col, Modal, Row, Typography } from '@douyinfe/semi-ui'
import { ModalReactProps } from '@douyinfe/semi-ui/lib/es/modal'

const { Text } = Typography

interface loginProps {
  
}
const Login: FC = ({ visible, title = "登录" }: loginProps & ModalReactProps) => {
  return (
    <Modal visible={visible} title={title}>
      <Row>
        <Col span={12}>
          <Text>扫码登录</Text>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAABlBMVEX///8AAABVwtN+AAACwElEQVR42uzcMZL6OgzHcTEUlBwhR8nRyNE4So5ASbGD3jiyFTk4uyle8cd8f9UyhM9WHsu2HCGEEEIIIYSQfz2jeu4ictKHpL9/0p+e+tMLAACgBZSPlwQM6ZM/OYtcVZ/L10ne/AIAoDdgSA9PF72fdV6eu+h01vtpZ5QBAAAcBfQpt/zc5gsAgK8BvALLg8mmLKvSAAAA/gK8zDvbRGRALPPKlPVXnQgA8MlAWP5vZ6ZB5brOTAf2DwAAvhmIyTNTAmydk3IrWwkHAgDwwUCp0rT85KqpLtNYpdny37eYAQAAWoBIAh7itV1VzelDbk8Z8yGNye8zEwBAD4AtYJZizM8ll0XOXXKVtv4TK9/eRyMAAMBm0JU1zVLmaZZ1GY0G7J7+AwB8PiAn2zKbLn4umfeV1ylrLL9aTjIBAACawLit+q5VNRemrAcAQN+A5nVOOaTxYiyNMpuyfFlkLTICAACwB4iUMu9lo3GqNtn0x4HGZhwAQB+ADRTNVdqQgNzwso4yzbK1Lo8vAACANmCtmOXE08q8BZjzF7Z/oOULAICOgVKlzeEsprSVqfebNfeVAQAAwl7aeuJZZqYq8fRft0seAIBOgHr5v21LzlPWWr5NO/3KAAAAYzjY1PXymObT/9BW9uvtAQCAPoDYPml7acskFXr3bS0ksZEZAABgr5VGzr7ICdWc92ju7WwDAHQEyPadMPYaiznckMnL/+ZFGAAAgLdbZXPV4z+ody8vVn3dDACgL6D14r2qdz+uhQAAAH4B6vdg5EP+chaT6r/1uvLeFU0AgE6AtxfvSQaG3G/mVZq2WiwBAAAaQHgPRjn9n0KTwNPflQEA0Dkwb7bM1k8nbys7MDMBAHwpEPbSynOx+d82pg/ViQAAnwxUL94rM1Pde1l69/0aMgAAwDtACCGEEEIIIf9//gsAAP//3V5zD8i5mqEAAAAASUVORK5CYII=" alt="" />
        </Col>
        <Col span={12}>
          
        </Col>
      </Row>
    </Modal>
  )
 }

 export default Login