(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_574501E3_5BA0_E13F_4181_8BB0325E60FF], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D_playlist,this.mainPlayList]); this.DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D_playlist.set('selectedIndex', 0)",
 "paddingLeft": 0,
 "data": {
  "name": "Player460"
 },
 "shadow": false,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_07C2D3AC_181D_B4F5_41AA_A92D7199F0BC",
  "this.IconButton_574501E3_5BA0_E13F_4181_8BB0325E60FF",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "class": "Player",
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "definitions": [{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_0_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131509",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_0",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_43F66C87_5BE0_A707_41D2_2B0338B3A483",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_t.jpg",
 "partial": false,
 "label": "20230821_175345_815",
 "id": "panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10",
   "class": "AdjacentPanorama",
   "backwardYaw": 179.07,
   "yaw": -1.14,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC",
   "class": "AdjacentPanorama",
   "backwardYaw": -15.88,
   "yaw": 174.56,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_18DFDD73_17F4_8C53_41B5_A9A7CABDACEE",
  "this.overlay_18E3185E_17FD_9454_4195_8C570D9755EC"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "class": "FadeOutEffect",
 "easing": "cubic_out",
 "id": "FadeOutEffect_0537C5AB_180C_9CFC_417D_772380C58AAA",
 "duration": 500
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4CA01AFF_5BE0_A0F7_41D6_0708B2A32763",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C42DB5D_5BE0_A10B_41A3_F22C086B13A2",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_0D09081A_181D_93DD_4184_0D60C27026B1",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D_playlist"
},
{
 "change": "this.showComponentsWhileMouseOver(this.container_4CE01A42_5BE0_A37E_4177_82B1744B0F31, [this.htmltext_4CE61A42_5BE0_A37E_41D2_4127981BFA8A,this.component_4CE75A52_5BE0_A31E_4189_C70D74635B10,this.component_4CE74A52_5BE0_A31E_41A9_421750F29B12], 2000)",
 "class": "PlayList",
 "items": [
  "this.albumitem_4CE05A42_5BE0_A37E_41C4_E853B5F7123A"
 ],
 "id": "playList_486C99B5_5BA1_A11A_41D0_B8F321FDEC1D"
},
{
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_574501E3_5BA0_E13F_4181_8BB0325E60FF",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_2_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131519",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_2",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C340C48_5BE0_A709_41C1_CBB2D8ACEDB9",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C838AA1_5BE0_A33B_41C8_60AC7C9CCFCE",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_9_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131848",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_9",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_9.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "class": "ImageResource",
 "id": "ImageResource_0537B5AA_180C_9CFC_41B2_C3DA659CF48E",
 "levels": [
  {
   "url": "media/zoomImage_0F3F267A_180D_9C5C_41B2_23345DC2391A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 3000,
   "height": 4000
  },
  {
   "url": "media/zoomImage_0F3F267A_180D_9C5C_41B2_23345DC2391A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 1536,
   "height": 2048
  },
  {
   "url": "media/zoomImage_0F3F267A_180D_9C5C_41B2_23345DC2391A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 768,
   "height": 1024
  },
  {
   "url": "media/zoomImage_0F3F267A_180D_9C5C_41B2_23345DC2391A_0_3.jpg",
   "class": "ImageResourceLevel",
   "width": 384,
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_t.jpg",
 "partial": false,
 "label": "20230821_175316_574",
 "id": "panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
   "class": "AdjacentPanorama",
   "backwardYaw": -69.25,
   "yaw": 91.93,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_4AA24968_5BA0_A10A_41C0_CAD126F901A1",
  "this.overlay_4BC84889_5BA1_6F0B_41CE_DB1A8A5E79D4"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_t.jpg",
 "partial": false,
 "label": "20230821_175348_794",
 "id": "panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D",
   "class": "AdjacentPanorama",
   "backwardYaw": 174.56,
   "yaw": -15.88,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_1AB4B618_17F5_BFDD_41A3_B87478472532"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.52,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C1A1C19_5BE0_A70A_41D2_B5030A07014E",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -5.44,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C695BDA_5BE0_A10E_41D3_D153EDB05CE6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_43C42C58_5BE0_A70A_41B5_2B3DF958A7D0",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_8_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131843",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_8",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_8.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_1_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131515",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_1",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_t.png",
 "label": "Photo Album IMG_20230821_131509",
 "playList": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_AlbumPlayList",
 "class": "PhotoAlbum",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE"
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_camera"
  },
  {
   "media": "this.panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_camera"
  },
  {
   "media": "this.panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_camera"
  },
  {
   "media": "this.panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_camera"
  },
  {
   "media": "this.panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_camera"
  },
  {
   "media": "this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_camera"
  },
  {
   "media": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_camera"
  },
  {
   "media": "this.panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_camera"
  },
  {
   "media": "this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_camera"
  },
  {
   "media": "this.panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_camera"
  },
  {
   "media": "this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_camera"
  },
  {
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_10_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131853",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_10",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_10.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "class": "FadeOutEffect",
 "easing": "linear",
 "id": "effect_03D000CE_1814_94B4_41B5_8B1D482E7E6A",
 "duration": 500
},
{
 "thumbnailUrl": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_t.jpg",
 "partial": false,
 "label": "20230821_175337_174",
 "id": "panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376",
   "class": "AdjacentPanorama",
   "backwardYaw": -20.86,
   "yaw": 102.16,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
   "class": "AdjacentPanorama",
   "backwardYaw": 170.48,
   "yaw": -4.2,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_073F19C0_17FB_B4AC_41A5_B5D973EAD4A1",
  "this.overlay_0742A827_17FB_F3F4_41B2_E937F84598E7"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_t.jpg",
 "partial": false,
 "label": "20230821_175331_542",
 "id": "panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4",
   "class": "AdjacentPanorama",
   "backwardYaw": 102.16,
   "yaw": -20.86,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_0661BA3D_17F4_97D4_4180_67CC5C2EA3DB"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_t.jpg",
 "partial": false,
 "label": "20230821_175322_578",
 "id": "panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08",
   "class": "AdjacentPanorama",
   "backwardYaw": 96.84,
   "yaw": -90.52,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_05EE1FFF_17F4_8C53_417A_A724E7E3B3CC"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_3_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131638",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_3",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.48,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C4CEB8C_5BE0_A109_416E_77F0DE574217",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_43E62C77_5BE0_A706_41D3_E1175F55D48B",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_43D7FC67_5BE0_A706_41D4_BBBD10D87679",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -101.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C79DBFA_5BE0_A109_41C6_61BC7250B295",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_5_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131802",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_5",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_5.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "class": "FadeInEffect",
 "easing": "cubic_in",
 "id": "FadeInEffect_0537D5AA_180C_9CFC_41B4_3636E90921B5",
 "duration": 500
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_7_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131812",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_7",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_7.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_t.jpg",
 "partial": false,
 "label": "20230821_175342_950",
 "id": "panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D",
   "class": "AdjacentPanorama",
   "backwardYaw": -1.14,
   "yaw": 179.07,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_199460E4_17FC_9474_4185_BCABC9C17542",
  "this.overlay_19234ADC_17FF_9455_41B7_8F3F97631CDD"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 159.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C081C09_5BE0_A70A_41B2_2E3D6540A48A",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_t.png",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "label": "Floor Plan",
 "id": "map_0D09081A_181D_93DD_4184_0D60C27026B1",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1.png",
    "class": "ImageResourceLevel",
    "width": 1414,
    "height": 1666
   },
   {
    "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_lq.png",
    "class": "ImageResourceLevel",
    "width": 235,
    "height": 277,
    "tags": "preload"
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "width": 1414,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "overlays": [
  "this.overlay_0CA902CF_181D_74B3_41B1_A50D068A18BC",
  "this.overlay_0D34D0E4_181C_9474_41B6_63743711AE71",
  "this.overlay_0D596378_181C_B45D_41A4_59ACDA319CA5",
  "this.overlay_0DE49505_181B_7DB4_4193_449F8788C2A9",
  "this.overlay_0C09B4F8_181B_BC5D_418B_E52FCB3460A2",
  "this.overlay_0CEC8829_181B_F3FF_41A0_FD2CDE97E827"
 ],
 "fieldOfViewOverlayOutsideColor": "#000000",
 "class": "Map",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 1666
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_t.jpg",
 "partial": false,
 "label": "20230821_175325_601",
 "id": "panorama_1DAC58E5_17F4_9474_4198_5585E980CF08",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0",
   "class": "AdjacentPanorama",
   "backwardYaw": 89.48,
   "yaw": -87.66,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B",
   "class": "AdjacentPanorama",
   "backwardYaw": -90.52,
   "yaw": 96.84,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
   "class": "AdjacentPanorama",
   "backwardYaw": 2.75,
   "yaw": 179.48,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_065D3C36_17F5_93D5_41A3_588E08A252B8",
  "this.overlay_06685D5F_17F4_8C54_419A_98940CE2B9AF",
  "this.overlay_09EFA3D1_180B_94AC_4181_10C75A7E154F"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_t.jpg",
 "partial": false,
 "label": "20230821_175312_992",
 "id": "panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
   "class": "AdjacentPanorama",
   "backwardYaw": 78.43,
   "yaw": -82.34,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_54611772_5BA7_611E_41C2_748FCF520348"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_6_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131809",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_6",
 "width": 3000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 4000
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "FadeInEffect",
 "easing": "linear",
 "id": "effect_03D010CE_1814_94B4_4190_564EC7395363",
 "duration": 500
},
{
 "thumbnailUrl": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_4_t.jpg",
 "duration": 5000,
 "label": "IMG_20230821_131754",
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_4",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 3000
},
{
 "thumbnailUrl": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_t.jpg",
 "partial": false,
 "label": "20230821_175328_610",
 "id": "panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4",
   "class": "AdjacentPanorama",
   "backwardYaw": -82.34,
   "yaw": 78.43,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4",
   "class": "AdjacentPanorama",
   "backwardYaw": -4.2,
   "yaw": 170.48,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30",
   "class": "AdjacentPanorama",
   "backwardYaw": 91.93,
   "yaw": -69.25,
   "distance": 1
  },
  {
   "panorama": "this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08",
   "class": "AdjacentPanorama",
   "backwardYaw": 179.48,
   "yaw": 2.75,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_069CDE00_17F7_8FAC_4172_CFCAA2667200",
  "this.overlay_06C48483_17F4_9CB3_4198_B0F91256FBEC",
  "this.overlay_0A3723ED_180D_B474_419A_37824789A965",
  "this.overlay_0A793FB0_180D_8CEC_418E_1029ABF60A53"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.75,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C886AC7_5BE0_A306_41B3_549B24007AF8",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C2A0C38_5BE0_A70A_41D3_4C1EFD4E24C4",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_camera",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C5F2BAB_5BE0_A10E_41C5_95B0F7105DD6",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.93,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4C948AE0_5BE0_A339_41B8_B543CA82712D",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "thumbnailUrl": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_t.jpg",
 "partial": false,
 "label": "20230821_175319_602",
 "id": "panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0",
 "hfovMin": "135%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "tags": "ondemand",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08",
   "class": "AdjacentPanorama",
   "backwardYaw": -87.66,
   "yaw": 89.48,
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "vfov": 180,
 "overlays": [
  "this.overlay_0A5F03E9_180C_947C_41AD_47763E9A901A"
 ],
 "pitch": 0,
 "class": "Panorama",
 "hfov": 360
},
{
 "contentOpaque": false,
 "shadowBlurRadius": 6,
 "id": "window_4A060F6D_5BA3_610A_41C5_92B72B8F8782",
 "closeButtonPaddingLeft": 0,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "closeButtonRollOverBackgroundColor": [],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 0,
 "closeButtonRollOverBackgroundOpacity": 1,
 "bodyBackgroundColorDirection": "vertical",
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 200
 },
 "minHeight": 20,
 "titleTextDecoration": "none",
 "headerVerticalAlign": "middle",
 "closeButtonPressedIconLineWidth": 3,
 "class": "Window",
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonIconWidth": 20,
 "modal": true,
 "closeButtonPressedBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "minWidth": 20,
 "bodyBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 0,
 "paddingRight": 0,
 "bodyPaddingBottom": 0,
 "closeButtonPaddingTop": 0,
 "title": "Menu Angeun Lada",
 "gap": 10,
 "closeButtonIconHeight": 20,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "titleFontSize": "1.29vmin",
 "bodyBackgroundOpacity": 0,
 "backgroundColor": [],
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "headerBorderSize": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "footerBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingLeft": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.container_4CE01A42_5BE0_A37E_4177_82B1744B0F31"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "closeButtonRollOverBorderColor": "#000000",
 "backgroundOpacity": 1,
 "layout": "vertical",
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "titleFontWeight": "normal",
 "closeButtonPressedBorderColor": "#000000",
 "footerHeight": 5,
 "closeButtonIconLineWidth": 2,
 "veilShowEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 200
 },
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "footerBackgroundOpacity": 0,
 "closeButtonPressedBackgroundColor": [],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonRollOverIconLineWidth": 1,
 "headerPaddingRight": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "closeButtonRollOverBorderSize": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 200
 },
 "bodyBorderColor": "#000000",
 "shadowHorizontalLength": 3,
 "footerBorderColor": "#000000",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#B2B2B2",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 0,
 "horizontalAlign": "center",
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "closeButtonPressedBackgroundOpacity": 1,
 "shadow": true,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 200
 },
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window11667"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.34,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_4CB3FB2C_5BE0_A109_41CF_4C054D40FEFD",
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "shadow": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingLeft": 0,
 "shadow": false,
 "id": "Container_07C2D3AC_181D_B4F5_41AA_A92D7199F0BC",
 "backgroundOpacity": 0,
 "children": [
  "this.MapViewer",
  "this.DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "width": "28.442%",
 "borderRadius": 0,
 "right": "0%",
 "overflow": "scroll",
 "paddingBottom": 0,
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "0%",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0,
 "contentOpaque": true,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "height": "61.431%",
 "data": {
  "name": "Container46251"
 }
},
{
 "paddingLeft": 0,
 "data": {
  "name": "IconButton14318"
 },
 "maxHeight": 56,
 "maxWidth": 56,
 "id": "IconButton_574501E3_5BA0_E13F_4181_8BB0325E60FF",
 "left": "1.18%",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "transparencyActive": false,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": "2.95%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "height": 41,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/IconButton_574501E3_5BA0_E13F_4181_8BB0325E60FF.png"
},
{
 "paddingLeft": 0,
 "shadow": false,
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": 0,
 "class": "UIComponent",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "visible": false,
 "data": {
  "name": "UIComponent13823"
 },
 "paddingTop": 0
},
{
 "paddingLeft": 0,
 "shadow": false,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "top": 0,
 "class": "ZoomImage",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "backgroundColorDirection": "vertical",
 "backgroundColor": [],
 "visible": false,
 "data": {
  "name": "ZoomImage13824"
 },
 "paddingTop": 0,
 "scaleMode": "custom"
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "paddingLeft": 5,
 "data": {
  "name": "CloseButton13825"
 },
 "shadow": false,
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "layout": "horizontal",
 "pressedIconColor": "#888888",
 "shadowColor": "#000000",
 "iconLineWidth": 5,
 "right": 10,
 "borderRadius": 0,
 "paddingBottom": 5,
 "iconColor": "#000000",
 "iconHeight": 20,
 "iconWidth": 20,
 "class": "CloseButton",
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "top": 10,
 "rollOverIconColor": "#666666",
 "minHeight": 0,
 "paddingRight": 5,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontColor": "#FFFFFF",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "visible": false,
 "horizontalAlign": "center",
 "fontStyle": "normal",
 "paddingTop": 5,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC, this.camera_4CA01AFF_5BE0_A0F7_41D6_0708B2A32763); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DCB571_180C_9C6C_41A6_AEE850719952",
   "pitch": -34.77,
   "yaw": 174.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.28,
   "distance": 100
  }
 ],
 "id": "overlay_18DFDD73_17F4_8C53_41B5_A9A7CABDACEE",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 174.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.77,
   "hfov": 17.28
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10, this.camera_4C948AE0_5BE0_A339_41B8_B543CA82712D); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DE7572_180C_9C6C_41B0_0DB4FBC2CCC7",
   "pitch": -28.77,
   "yaw": -1.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.5,
   "distance": 100
  }
 ],
 "id": "overlay_18E3185E_17FD_9454_4195_8C570D9755EC",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -28.77,
   "hfov": 23.5
  }
 ],
 "rollOverDisplay": false
},
{
 "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_AlbumPlayList, this.htmltext_4CE61A42_5BE0_A37E_41D2_4127981BFA8A, this.albumitem_4CE05A42_5BE0_A37E_41C4_E853B5F7123A); this.loopAlbum(this.playList_486C99B5_5BA1_A11A_41D0_B8F321FDEC1D, 0)",
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uid4CE07A42_5BE0_A37E_41C9_DAAF6939A5A1PhotoAlbumPlayer",
 "id": "albumitem_4CE05A42_5BE0_A37E_41C4_E853B5F7123A"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1, this.camera_4C886AC7_5BE0_A306_41B3_549B24007AF8); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4A226006_5BA1_5EF9_41D4_82E63C2316E9",
   "pitch": -39.68,
   "yaw": 91.93,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.61,
   "distance": 100
  }
 ],
 "id": "overlay_4AA24968_5BA0_A10A_41C0_CAD126F901A1",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -39.68,
   "hfov": 20.61
  }
 ],
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_4A060F6D_5BA3_610A_41C5_92B72B8F8782, this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE, this.playList_486C99B5_5BA1_A11A_41D0_B8F321FDEC1D, '70%', '70%', false, false)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "yaw": -90.48,
   "hfov": 16.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 287,
      "height": 234
     }
    ]
   },
   "pitch": -18
  }
 ],
 "id": "overlay_4BC84889_5BA1_6F0B_41CE_DB1A8A5E79D4",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -18,
   "hfov": 16.2
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D, this.camera_4C695BDA_5BE0_A10E_41D3_D153EDB05CE6); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DFC572_180C_9C6C_41AF_2FB8A9DFA92C",
   "pitch": -22.63,
   "yaw": -15.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 19.44,
   "distance": 100
  }
 ],
 "id": "overlay_1AB4B618_17F5_BFDD_41A3_B87478472532",
 "data": {
  "label": "Arrow 06a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.63,
   "hfov": 19.44
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_0",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.30",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_1",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.60",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_2",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.39",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_3",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.47",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_4",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.67",
     "zoomFactor": 1.1,
     "y": "0.46"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_5",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.29",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_6",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "zoomFactor": 1.1,
     "y": "0.73"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_7",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "zoomFactor": 1.1,
     "y": "0.47"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_8",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.74",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_9",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.55",
     "zoomFactor": 1.1,
     "y": "0.33"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  },
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_10",
   "camera": {
    "easing": "linear",
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "zoomFactor": 1.1,
     "y": "0.75"
    },
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_AlbumPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1, this.camera_4C1A1C19_5BE0_A70A_41D2_B5030A07014E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DE756F_180C_9C74_41A0_C2C953E71A19",
   "pitch": -40.91,
   "yaw": -4.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.24,
   "distance": 100
  }
 ],
 "id": "overlay_073F19C0_17FB_B4AC_41A5_B5D973EAD4A1",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -40.91,
   "hfov": 20.24
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376, this.camera_4C081C09_5BE0_A70A_41B2_2E3D6540A48A); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DFB56F_180C_9C74_4178_D3C317346EB8",
   "pitch": -30.27,
   "yaw": 102.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.13,
   "distance": 100
  }
 ],
 "id": "overlay_0742A827_17FB_F3F4_41B2_E937F84598E7",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 102.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -30.27,
   "hfov": 23.13
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4, this.camera_4C838AA1_5BE0_A33B_41C8_60AC7C9CCFCE); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DE156E_180C_9C74_41B7_64DBD72A69D0",
   "pitch": -26.59,
   "yaw": -20.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 30.73,
   "distance": 50
  }
 ],
 "id": "overlay_0661BA3D_17F4_97D4_4180_67CC5C2EA3DB",
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -20.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 44,
      "height": 16
     }
    ]
   },
   "pitch": -26.59,
   "hfov": 30.73
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08, this.camera_4C340C48_5BE0_A709_41C1_CBB2D8ACEDB9); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D8856A_180C_9C7D_4187_0644E6CB5F44",
   "pitch": -31.09,
   "yaw": -90.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.93,
   "distance": 100
  }
 ],
 "id": "overlay_05EE1FFF_17F4_8C53_417A_A724E7E3B3CC",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -31.09,
   "hfov": 22.93
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D, this.camera_4C2A0C38_5BE0_A70A_41D3_4C1EFD4E24C4); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DFE570_180C_9C6C_4182_0FA03627FFF9",
   "pitch": -36,
   "yaw": 179.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 21.66,
   "distance": 100
  }
 ],
 "id": "overlay_199460E4_17FC_9474_4185_BCABC9C17542",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -36,
   "hfov": 21.66
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DF5570_180C_9C6C_41AE_0F36BCBFAE04",
   "pitch": -30.68,
   "yaw": -11.98,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.03,
   "distance": 100
  }
 ],
 "id": "overlay_19234ADC_17FF_9455_41B7_8F3F97631CDD",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -30.68,
   "hfov": 23.03
  }
 ],
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1248.15,
  "x": 91.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 18
    }
   ]
  },
  "y": 530.94,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 115.92,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "image": {
  "width": 1248.15,
  "x": 91.39,
  "y": 530.94,
  "class": "HotspotMapOverlayImage",
  "height": 115.92
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0CA902CF_181D_74B3_41B1_A50D068A18BC",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1248.15,
  "x": 91.39,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_1_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 19
    }
   ]
  },
  "y": 708.86,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 121.31,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "image": {
  "width": 1248.15,
  "x": 91.39,
  "y": 708.86,
  "class": "HotspotMapOverlayImage",
  "height": 121.31
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0D34D0E4_181C_9474_41B6_63743711AE71",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1253.54,
  "x": 88.69,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_2_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 21
    }
   ]
  },
  "y": 889.48,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 132.09,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "image": {
  "width": 1253.54,
  "x": 88.69,
  "y": 889.48,
  "class": "HotspotMapOverlayImage",
  "height": 132.09
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0D596378_181C_B45D_41A4_59ACDA319CA5",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1250.85,
  "x": 88.83,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_3_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 20
    }
   ]
  },
  "y": 1070.09,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 129.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "image": {
  "width": 1250.85,
  "x": 88.83,
  "y": 1070.09,
  "class": "HotspotMapOverlayImage",
  "height": 129.4
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0DE49505_181B_7DB4_4193_449F8788C2A9",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1248.15,
  "x": 96.78,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_4_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 20
    }
   ]
  },
  "y": 1255.97,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 126.7,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "image": {
  "width": 1248.15,
  "x": 96.78,
  "y": 1255.97,
  "class": "HotspotMapOverlayImage",
  "height": 126.7
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0C09B4F8_181B_BC5D_418B_E52FCB3460A2",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "map": {
  "width": 1253.54,
  "x": 88.83,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_0D09081A_181D_93DD_4184_0D60C27026B1_HS_5_map.gif",
     "class": "ImageResourceLevel",
     "width": 200,
     "height": 20
    }
   ]
  },
  "y": 1434.03,
  "class": "HotspotMapOverlayMap",
  "offsetY": 0,
  "height": 129.4,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupImage(this.ImageResource_0537B5AA_180C_9CFC_41B2_C3DA659CF48E, null, '90%', '90%', this.FadeInEffect_0537D5AA_180C_9CFC_41B4_3636E90921B5, this.FadeOutEffect_0537C5AB_180C_9CFC_417D_772380C58AAA, {'pressedIconColor':'#888888','paddingLeft':5,'paddingRight':5,'rollOverBackgroundOpacity':0.3,'pressedBorderSize':0,'rollOverIconHeight':20,'backgroundOpacity':0.3,'borderSize':0,'rollOverBorderSize':0,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'iconWidth':20,'iconHeight':20,'rollOverBackgroundColorDirection':'vertical','paddingBottom':5,'pressedIconLineWidth':5,'pressedBackgroundColorDirection':'vertical','iconLineWidth':5,'rollOverIconColor':'#666666','pressedIconHeight':20,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundOpacity':0.3,'borderColor':'#000000','rollOverIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000'}, null, null, false)"
  }
 ],
 "image": {
  "width": 1253.54,
  "x": 88.83,
  "y": 1434.03,
  "class": "HotspotMapOverlayImage",
  "height": 129.4
 },
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "id": "overlay_0CEC8829_181B_F3FF_41A0_FD2CDE97E827",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1, this.camera_4C5F2BAB_5BE0_A10E_41C5_95B0F7105DD6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D8F56A_180C_9C7D_41AE_AF5AE3C900EF",
   "pitch": -17.59,
   "yaw": 179.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.52,
   "distance": 100
  }
 ],
 "id": "overlay_065D3C36_17F5_93D5_41A3_588E08A252B8",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -17.59,
   "hfov": 25.52
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B, this.camera_4C4CEB8C_5BE0_A109_416E_77F0DE574217); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D8256C_180C_9C74_41AD_FF1A3D4B4A6F",
   "pitch": -32.32,
   "yaw": 96.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.63,
   "distance": 100
  }
 ],
 "id": "overlay_06685D5F_17F4_8C54_419A_98940CE2B9AF",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 96.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -32.32,
   "hfov": 22.63
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0, this.camera_4C42DB5D_5BE0_A10B_41A3_F22C086B13A2); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D8656C_180C_9C74_419A_E5BBBD4AD4C2",
   "pitch": -30.27,
   "yaw": -87.66,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.13,
   "distance": 100
  }
 ],
 "id": "overlay_09EFA3D1_180B_94AC_4181_10C75A7E154F",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -87.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -30.27,
   "hfov": 23.13
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1, this.camera_4C79DBFA_5BE0_A109_41C6_61BC7250B295); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_4A22C006_5BA1_5EF9_41C7_9369AEB93E1E",
   "pitch": -26.18,
   "yaw": -82.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 24.03,
   "distance": 100
  }
 ],
 "id": "overlay_54611772_5BA7_611E_41C2_748FCF520348",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -82.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -26.18,
   "hfov": 24.03
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4, this.camera_43D7FC67_5BE0_A706_41D4_BBBD10D87679); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D9C56C_180C_9C74_41AF_267EC2E8649E",
   "pitch": -28.64,
   "yaw": 170.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.5,
   "distance": 100
  }
 ],
 "id": "overlay_069CDE00_17F7_8FAC_4172_CFCAA2667200",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -28.64,
   "hfov": 23.5
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08, this.camera_43F66C87_5BE0_A707_41D2_2B0338B3A483); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D9356D_180C_9C74_4190_568D4F3D12BA",
   "pitch": -50.32,
   "yaw": 2.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.1,
   "distance": 100
  }
 ],
 "id": "overlay_06C48483_17F4_9CB3_4198_B0F91256FBEC",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -50.32,
   "hfov": 17.1
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4, this.camera_43C42C58_5BE0_A70A_41B5_2B3DF958A7D0); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04D9656D_180C_9C74_419D_7F3618BCCE8B",
   "pitch": -31.91,
   "yaw": 78.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.73,
   "distance": 100
  }
 ],
 "id": "overlay_0A3723ED_180D_B474_419A_37824789A965",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -31.91,
   "hfov": 22.73
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30, this.camera_43E62C77_5BE0_A706_41D3_E1175F55D48B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DEA56E_180C_9C74_41A5_BC0066AC4450",
   "pitch": -33.14,
   "yaw": -69.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.42,
   "distance": 100
  }
 ],
 "id": "overlay_0A793FB0_180D_8CEC_418E_1029ABF60A53",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -69.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -33.14,
   "hfov": 22.42
  }
 ],
 "rollOverDisplay": false
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "minHeight": 1,
 "playbackBarHeadHeight": 15,
 "class": "ViewerArea",
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "92.982%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "fade_out_fade_in",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "bottom": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "shadow": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "MapViewer"
 }
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_1DAC58E5_17F4_9474_4198_5585E980CF08, this.camera_4CB3FB2C_5BE0_A109_41CF_4C054D40FEFD); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "image": "this.AnimatedImageResource_04DA5564_180C_9C75_41B7_2F5CBE447797",
   "pitch": -31.91,
   "yaw": 89.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 22.73,
   "distance": 100
  }
 ],
 "id": "overlay_0A5F03E9_180C_947C_41AD_47763E9A901A",
 "data": {
  "label": "Arrow 05c"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ]
   },
   "pitch": -31.91,
   "hfov": 22.73
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 0,
 "shadow": false,
 "height": "100%",
 "id": "container_4CE01A42_5BE0_A37E_4177_82B1744B0F31",
 "backgroundOpacity": 0.3,
 "children": [
  "this.viewer_uid4CE07A42_5BE0_A37E_41C9_DAAF6939A5A1",
  {
   "paddingLeft": 0,
   "shadow": false,
   "height": "30%",
   "scrollBarWidth": 7,
   "left": 0,
   "backgroundOpacity": 0.3,
   "children": [
    "this.htmltext_4CE61A42_5BE0_A37E_41D2_4127981BFA8A"
   ],
   "layout": "vertical",
   "right": 0,
   "borderRadius": 0,
   "paddingBottom": 0,
   "overflow": "scroll",
   "minHeight": 20,
   "propagateClick": false,
   "verticalAlign": "bottom",
   "class": "Container",
   "backgroundColorRatios": [],
   "paddingRight": 0,
   "borderSize": 0,
   "minWidth": 20,
   "scrollBarColor": "#FFFFFF",
   "scrollBarVisible": "rollOver",
   "bottom": 0,
   "backgroundColorDirection": "vertical",
   "gap": 10,
   "scrollBarMargin": 2,
   "backgroundColor": [],
   "contentOpaque": true,
   "horizontalAlign": "left",
   "paddingTop": 0,
   "scrollBarOpacity": 0.5,
   "data": {
    "name": "Container13819"
   }
  },
  "this.component_4CE75A52_5BE0_A31E_4189_C70D74635B10",
  "this.component_4CE74A52_5BE0_A31E_41A9_421750F29B12"
 ],
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "overflow": "scroll",
 "class": "Container",
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [],
 "minHeight": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [],
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "Container13818"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "paddingLeft": 5,
 "popUpShadowBlurRadius": 6,
 "shadow": false,
 "id": "DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D",
 "left": "0%",
 "popUpShadowColor": "#000000",
 "backgroundOpacity": 0.9,
 "popUpFontColor": "#000000",
 "popUpBorderRadius": 0,
 "arrowColor": "#FFFFFF",
 "popUpShadowOpacity": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "popUpShadowSpread": 1,
 "playList": "this.DropDown_03B10EAB_181D_8CF3_4184_8554EE6B896D_playlist",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "class": "DropDown",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "top": "0%",
 "arrowBeforeLabel": false,
 "popUpBackgroundColor": "#FFFFFF",
 "minHeight": 20,
 "paddingRight": 5,
 "borderSize": 0,
 "popUpGap": 0,
 "minWidth": 200,
 "fontSize": 14,
 "label": "Floor Plan",
 "selectedPopUpBackgroundColor": "#333333",
 "popUpBackgroundOpacity": 0.9,
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "click": "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, this.effect_03D010CE_1814_94B4_4190_564EC7395363, 'showEffect', false) } else { this.setComponentVisibility(this.MapViewer, false, 0, this.effect_03D000CE_1814_94B4_41B5_8B1D482E7E6A, 'hideEffect', false) }",
 "fontColor": "#FFFFFF",
 "selectedPopUpFontColor": "#FFFFFF",
 "backgroundColor": [
  "#666666"
 ],
 "popUpShadow": false,
 "data": {
  "name": "DropDown1204"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "height": "7.089%",
 "fontWeight": "normal"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DCB571_180C_9C6C_41A6_AEE850719952",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC4B29_17F7_95FF_41B6_82FDFC5E533D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DE7572_180C_9C6C_41B0_0DB4FBC2CCC7",
 "frameDuration": 41
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid4CE07A42_5BE0_A37E_41C9_DAAF6939A5A1",
 "id": "viewer_uid4CE07A42_5BE0_A37E_41C9_DAAF6939A5A1PhotoAlbumPlayer"
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DA9A058_17F5_B45D_41B1_249CA003EB30_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4A226006_5BA1_5EF9_41D4_82E63C2316E9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC4E16_17F7_8FD4_41A5_1F2B9CF122EC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DFC572_180C_9C6C_41AF_2FB8A9DFA92C",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DE756F_180C_9C74_41A0_C2C953E71A19",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAFF3F3_17F4_B46C_4199_A15BB61793A4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DFB56F_180C_9C74_4178_D3C317346EB8",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC1E7D_17F4_8C57_41AE_F6EC2BFF7376_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 560,
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DE156E_180C_9C74_41B7_64DBD72A69D0",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC3595_17F5_7CD4_41B5_2B57C1BE216B_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D8856A_180C_9C7D_4187_0644E6CB5F44",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DFE570_180C_9C6C_4182_0FA03627FFF9",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC37E7_17F7_7C73_41B4_CF626957FC10_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DF5570_180C_9C6C_41AE_0F36BCBFAE04",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D8F56A_180C_9C7D_41AE_AF5AE3C900EF",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D8256C_180C_9C74_41AD_FF1A3D4B4A6F",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC58E5_17F4_9474_4198_5585E980CF08_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D8656C_180C_9C74_419A_E5BBBD4AD4C2",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1D7B1E90_17F5_8CAD_41B7_27E38CFC4AF4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_4A22C006_5BA1_5EF9_41C7_9369AEB93E1E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D9C56C_180C_9C74_41AF_267EC2E8649E",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D9356D_180C_9C74_4190_568D4F3D12BA",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04D9656D_180C_9C74_419D_7F3618BCCE8B",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC6C45_17F4_B3B7_4190_C7A5847CB1F1_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DEA56E_180C_9C74_41A5_BC0066AC4450",
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "url": "media/panorama_1DAC12BF_17F5_94D3_41B2_3F4B9F93D7B0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 330
  }
 ],
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_04DA5564_180C_9C75_41B7_2F5CBE447797",
 "frameDuration": 41
},
{
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "viewer_uid4CE07A42_5BE0_A37E_41C9_DAAF6939A5A1",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "minHeight": 50,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "transitionMode": "blending",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "shadow": false,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "ViewerArea13817"
 }
},
{
 "paddingLeft": 10,
 "shadow": false,
 "id": "htmltext_4CE61A42_5BE0_A37E_41D2_4127981BFA8A",
 "backgroundOpacity": 0.7,
 "width": "100%",
 "scrollBarWidth": 10,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "borderRadius": 0,
 "paddingBottom": 5,
 "class": "HTMLText",
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minHeight": 0,
 "paddingRight": 10,
 "borderSize": 0,
 "minWidth": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "html": "",
 "visible": false,
 "data": {
  "name": "HTMLText13820"
 },
 "paddingTop": 5,
 "scrollBarOpacity": 0.5
},
{
 "paddingLeft": 0,
 "data": {
  "name": "IconButton13821"
 },
 "shadow": false,
 "id": "component_4CE75A52_5BE0_A31E_4189_C70D74635B10",
 "left": 10,
 "backgroundOpacity": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "borderRadius": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "45%",
 "minHeight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_AlbumPlayList, -1)",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/album_left.png"
},
{
 "paddingLeft": 0,
 "data": {
  "name": "IconButton13822"
 },
 "shadow": false,
 "id": "component_4CE74A52_5BE0_A31E_41A9_421750F29B12",
 "backgroundOpacity": 0,
 "hideEffect": {
  "easing": "cubic_in_out",
  "class": "FadeOutEffect",
  "duration": 250
 },
 "borderRadius": 0,
 "right": 10,
 "transparencyActive": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "45%",
 "minHeight": 0,
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "paddingRight": 0,
 "click": "this.loadFromCurrentMediaPlayList(this.album_4AD0DF15_5BA7_A11A_41B3_A46424F78FCE_AlbumPlayList, 1)",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 250
 },
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "iconURL": "skin/album_right.png"
}],
 "minHeight": 20,
 "paddingRight": 0,
 "borderSize": 0,
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
