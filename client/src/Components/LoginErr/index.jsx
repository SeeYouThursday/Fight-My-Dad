

//USE THIS ERROR MESSAGE WHEN THE USER MUST BE LOGGED IN!

export default function LoginErr() {
    
    const styles = {
        loginerr: {
            background: 'var(--primary)',
            width: '30vw',
            fontFamily: 'Permanent Marker',
            padding: '10px',
            margin: '10px',
            borderRadius: '10px',
            textAlign: 'center',

            
        },
        loginErrContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }
    }

    return(
        <div style={styles.loginErrContainer}>
            <section style={styles.loginerr}>
            <h2>You Must Be Logged In To View This Page!</h2>
            </section>
        </div>
        
    )
}