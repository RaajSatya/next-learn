
function layout({ children, left, right }) {
    const isLoggedIn = false
    return (
        <div>
            colorBoxLayout.js
            {children}
            {isLoggedIn ? left : right}
        </div>
    )
}

export default layout