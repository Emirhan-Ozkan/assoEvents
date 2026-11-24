const form = document.querySelector("#userForm");
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // empêche le rechargement de la page
        const nomInput = document.querySelector("#nom");
        const emailInput = document.querySelector("#email");
        if (!nomInput || !emailInput)
            return;
        const name = nomInput.value;
        const email = emailInput.value;
        console.log(name, email)
        const response = await fetch("/utilisateurs", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email })
        });
        form.reset();
    });
}
export {};
//# sourceMappingURL=script.js.map