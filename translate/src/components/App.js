import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
    state = {
        language: 'english',
    };

    onLanguageChange = (language) => {
        {
            this.setState({ language: language });
        }
    };

    render() {
        return (
            <div className='ui container'>
                <div>
                    Select language:
                    <i
                        className='flag us'
                        onClick={() => {
                            this.onLanguageChange('english');
                        }}
                    />
                    <i
                        className='flag ru'
                        onClick={() => {
                            this.onLanguageChange('russian');
                        }}
                    />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;
