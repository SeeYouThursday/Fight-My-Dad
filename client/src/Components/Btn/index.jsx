
const styles = {
    x: {
        background: "#d01e00",
        border: "none",
        color: "#fff",
        fontWeight: "bold",
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        textDecoration: "none",
        fontFamily: "Permanent Marker",
        margin: "10px"
    }
}

export default function Btn() {
    return(

        <a href="/dashboard">
            <button style={styles.x} >
            {/* TO DO: CREATE BUTTON HERE */}
            X
            </button>
        </a>
        

        
    )
}

