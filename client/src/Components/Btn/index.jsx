
const styles = {
    x: {
        background: "var(--secondary)",
        border: "none",
        color: "var(--light)",
        fontWeight: "bold",
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        textDecoration: "none",
        fontFamily: "Permanent Marker",
        margin: "10px"
    },
    container: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

//USE THIS BTN FOR EVERY PAGE THAT MUST RETURN TO DASHBOARD!

export default function Btn() {
    return(

        <a style={styles.container} href="/dashboard">
            <button style={styles.x} >
            {/* TO DO: CREATE BUTTON HERE */}
            X
            </button>
        </a>
        

        
    )
}

