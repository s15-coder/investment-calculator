export default function UserInput() {
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input type="text" required />
            </p>
            <p>
                <label>Annual investment</label>
                <input type="text" required />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected result</label>
                <input type="text" required />
            </p>
            <p>
                <label>Duration</label>
                <input type="text" required />
            </p>
        </div>
    </section>
}