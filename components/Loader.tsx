import styled, { keyframes } from 'styled-components'

const LoaderWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Loader = styled.div`
    border: solid #f3f3f3;
    border-top: solid #235be8;
    border-radius: 50%;
    width: ${({ size }: { size: number }) => size}px;
    height: ${({ size }: { size: number }) => size}px;
    animation: ${rotate} 2s linear infinite;
`

export function Spinner({ size = 20 }: { size: number }) {
    return (
        <LoaderWrapper>
            <Loader size={size} />
        </LoaderWrapper>
    )
}