</main>
<footer>
    <p>Copyright <?php echo date('Y') ?> - Tous droits réservés</p>
</footer>


<?php if(!isset($_COOKIE['acceptCookies'])) : ?>

<div id="bandeaucookies">
    <p>
        Pour votre confort de navigation, ce site utilise des cookies. <button id="acceptcookies">J'accepte</button>
    </p>
</div>

<?php endif; ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.3/leaflet.min.js" integrity="sha512-Io0KK/1GsMMQ8Vpa7kIJjgvOcDSwIqYuigJEYxrrObhsV4j+VTOQvxImACNJT5r9O4n+u9/58h7WjSnT5eC4hA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> 

<script src="<?php echo URLSITE ?>js/functions.js"></script>

</body>
</html>
