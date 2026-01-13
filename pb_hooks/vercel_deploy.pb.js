// Webhook pour déclencher le déploiement Vercel lors des modifications de la collection "projets"

const VERCEL_DEPLOY_HOOK = "https://api.vercel.com/v1/integrations/deploy/prj_uTg3dRlVjbayV7lYuNq66Ys4MhgV/jCj3I1AtDz";

// Fonction pour appeler le webhook Vercel
function triggerVercelDeploy() {
    try {
        $http.send({
            url: VERCEL_DEPLOY_HOOK,
            method: "POST",
            timeout: 10 // 10 secondes de timeout
        });
        console.log("Vercel deploy hook triggered successfully");
    } catch (error) {
        console.error("Error triggering Vercel deploy hook:", error);
    }
}

// Hook pour CREATE - Quand un nouveau projet est créé
onRecordAfterCreateSuccess((e) => {
    console.log("New record created in projets collection");
    triggerVercelDeploy();
}, "projets");

// Hook pour UPDATE - Quand un projet est modifié
onRecordAfterUpdateSuccess((e) => {
    console.log("Record updated in projets collection");
    triggerVercelDeploy();
}, "projets");

// Hook pour DELETE - Quand un projet est supprimé
onRecordAfterDeleteSuccess((e) => {
    console.log("Record deleted from projets collection");
    triggerVercelDeploy();
}, "projets");
