import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Jagrut Thakare. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
