if (rows.length > 0) {
    res.redirect('/admin/novedades');  // redirige a la ruta admin/novedades
} else {
    res.send('Usuario o password incorrectos ❌');
}