import styled from "styled-components";
import { ReactComponent as Toggle } from "./Image/toggle.svg"

export const DMWrapper = styled.div`
    height: 26px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
`;

export const DMStatus = styled.p`
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.textSecondary};
`;

export const DMButton = styled.button`
    display: flex;
    align-items: center;
    width: 48px;
    height: 26px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.color.textSecondary};
    background-color: ${({ theme }) => theme.color.mercury};
`;

export const DMIcon = styled(Toggle)`
    color: ${({ theme }) => theme.color.textSecondary};
`;
