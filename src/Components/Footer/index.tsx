import { GithubOutlined, LinkedinOutlined, PrinterOutlined } from '@ant-design/icons';
import * as S from './styles'
import { Typography } from 'antd';

export default function Footer() {
    return (
        <>
            <S.Container>
                <Typography.Title level={3} style={{ color: '#fff', margin: 0 }}>
                    Made By Micaio
                </Typography.Title>
                <S.ContainerIcons>
                    <a href='https://github.com/micaiovalente' target={'_blank'}>
                        <S.ButtonHeader type="primary" icon={<GithubOutlined />} size={'middle'} />
                    </a>
                </S.ContainerIcons>
                <S.ContainerIcons>
                    <a href='https://www.linkedin.com/in/micaiovalente/' target={'_blank'}>
                        <S.ButtonHeader type="primary" icon={<LinkedinOutlined />} size={'middle'} />
                    </a>
                </S.ContainerIcons>
            </S.Container>
        </>
    )
}
