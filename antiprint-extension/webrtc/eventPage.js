/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';

if (!browserSupportsIPHandlingPolicy()) {
    chrome.privacy.network.webRTCMultipleRoutesEnabled.set({
        value: false
    });
}

