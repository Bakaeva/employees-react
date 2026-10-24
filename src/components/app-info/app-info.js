import styled from 'styled-components';
import { Wrapper } from '../app/app'

const AppInfo = ({ total, increased }) => {
    const AppInfoWrapper = styled(Wrapper)`
      margin-top: 0;
    `;

    return (
        <AppInfoWrapper>
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {increased}</h2>
        </AppInfoWrapper>
    );
};

export default AppInfo;