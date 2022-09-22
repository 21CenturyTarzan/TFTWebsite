/**
 **************************************************************
 * The Fans Together Website - v1.0.0
 **************************************************************
 * 
 * Product Page: 
 * Copyright 2022 @TFTTeam (https://www.tft-dev-team.com)
 * 
 * Coded by DavidSparker
 * 
 **************************************************************
 */

import React from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function WhitePaper() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <Viewer
        fileUrl='https://ipfs.io/ipfs/QmVbd2q452Me6xKCZ3SzR9HVBop3BztoP2om373a2vyD8R'
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  )
}
