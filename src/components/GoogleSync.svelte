<!-- GoogleSyncButton.svelte -->
<script>
    import { onMount } from "svelte";
    import { gapi } from "gapi-script";

    let clientInitialized = false;

    function syncOTPs() {
        if (!clientInitialized) {
            initializeClient().then(() => {
                syncOTPs();
            });
            return;
        }

        const user = gapi.auth2.getAuthInstance().currentUser.get();
        if (!user.isSignedIn()) {
            gapi.auth2.getAuthInstance().signIn().then(syncOTPs);
            return;
        }

        const authResponse = user.getAuthResponse();
        console.log("User signed in:", user);

        // Retrieve OTPs from local storage
        const storedOTPs = JSON.parse(localStorage.getItem("otps")) || [];

        // Create a new file with OTPs in Google Drive
        const fileMetadata = {
            name: "OTPs.json",
            mimeType: "application/json",
        };
        const fileContent = JSON.stringify(storedOTPs);
        const media = {
            mimeType: "application/json",
            body: fileContent,
        };

        gapi.client.drive.files.create({
            resource: fileMetadata,
            media: media,
            fields: "id",
        }).then((response) => {
            console.log("File created:", response.result);
        });
    }

    async function initializeClient() {
        const CLIENT_ID = "50771926637-24s7b5md9vlk6kaiavd787nrt17d68v8.apps.googleusercontent.com";
        const API_KEY = "AIzaSyA6vFvIeIfUR75v0AjAT9ap82_RljcZ0LA";
        const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
        const SCOPES = "https://www.googleapis.com/auth/drive.file";

        await gapi.load("client:auth2");
        await gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        });
        clientInitialized = true;
    }

    onMount(() => {
        const script = document.createElement("script");
        script.src = "https://apis.google.com/js/platform.js";
        script.async = true;
        script.defer = true;
        script.onload = initializeClient;
        document.head.appendChild(script);
    });
</script>

<button on:click={syncOTPs} class="w-full text-left text-lg">Google Sync</button>
