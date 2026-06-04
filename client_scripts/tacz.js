const $Bolt = Java.loadClass("com.tacz.guns.resource.pojo.data.gun.Bolt");

TaCZClientEvents.playerShoot(event => {
    let gunItem = event.player.getItemInHand('main_hand')
    let ammoCount = parseInt(gunItem.getCustomData()['GunCurrentAmmoCount'])
    let bolt = event.gunIndex.gunData.bolt
    if (bolt == $Bolt.CLOSED_BOLT || bolt == $Bolt.MANUAL_ACTION) {
        ammoCount += parseInt(gunItem.getCustomData()['HasBulletInBarrel'])
    }
    if (ammoCount <= 0)
        event.gunOperator.reload()
})
