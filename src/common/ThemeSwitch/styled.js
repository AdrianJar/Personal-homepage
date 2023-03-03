import styled, { css } from "styled-components";
import { ReactComponent as Toggle } from "./Image/toggle.svg"

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    position: absolute;
    top: 0;
    right: 0;
`;

export const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    background-color: white;
    cursor: pointer;
`;

export const Status = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    width: 48px;
    height: 26px;
    background-color: silver;
    border: 1px solid #6E7E91;
    border-radius: 12px;
    margin-left: 12px;
`;

export const IconWrapper = styled.div`
    background: currentColor;
    padding: 3px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(Toggle)`
    margin: 3px;
    color: ${({ theme }) => theme.color.textSecondary};
`;