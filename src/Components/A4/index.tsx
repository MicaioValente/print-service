import * as S from './styles'
import { Draggable } from 'drag-react';

export default function A4({ children }: any) {

    // imprimir aki

    return (
        <S.Container>
            <S.A4 >
                {children}
            </S.A4>
        </S.Container>
    )
}
