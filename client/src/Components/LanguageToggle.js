import React from 'react';
import {withLocalize} from 'react-localize-redux';

const LanguageToggle = ({languages, activeLanguage, setActiveLanguage}) => {
    const getClass = (languageCode) => {
        return languageCode === activeLanguage.code ? 'active' : ''
    };

    return (
        <div className="lang">
            {languages.map(lang =>
                <a key={lang.code} className={getClass(lang.code)}
                   onClick={() => setActiveLanguage(lang.code)}>{lang.name}</a>
            )}
        </div>
)
    ;
};

export default withLocalize(LanguageToggle);