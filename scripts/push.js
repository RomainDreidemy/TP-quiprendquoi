// window.addEventListener('load', function () {
//     Notification.requestPermission(function (status) {
//         // Cela permet d'utiliser Notification.permission avec Chrome/Safari
//         if (Notification.permission !== status) {
//             Notification.permission = status;
//         }
//     });
// });
//
// document.getElementById('push').addEventListener('click', function () {
//     // Si l'utilisateur accepte d'être notifié
//     if (window.Notification && Notification.permission === "granted") {
//         var n = new Notification("Coucou notification !");
//     }
//
//         // Si l'utilisateur n'a pas choisi s'il accepte d'être notifié
//     // Note: à cause de Chrome, nous ne sommes pas certains que la propriété permission soit définie, par conséquent il n'est pas sûr de vérifier la valeur par défaut.
//     else if (window.Notification && Notification.permission !== "denied") {
//         Notification.requestPermission(function (status) {
//             if (Notification.permission !== status) {
//                 Notification.permission = status;
//             }
//
//             // Si l'utilisateur est OK
//             if (status === "granted") {
//                 var n = new Notification("Coucou notification !");
//                 // alert("Coucou !");
//             }
//
//             // Sinon, revenons en à un mode d'alerte classique
//             else {
//                 alert("Les notifications ne sont pas autorisées.");
//             }
//         });
//     }
//
//     // Si l'utilisateur refuse d'être notifié
//     else {
//         // We can fallback to a regular modal alert
//         alert("Les notifications ne sont pas autorisées.");
//     }
// });
//
// if(!window.Notification){
//     alert('Ne supporte pas les notifications')
// }
