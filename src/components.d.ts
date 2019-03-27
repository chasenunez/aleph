/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import {
  DisplayMode,
} from './enums/DisplayMode';
import {
  Orientation,
} from './enums/Orientation';
import {
  AlToolSerial,
} from './interfaces';
import {
  DisplayMode as DisplayMode2,
} from './enums';


export namespace Components {

  interface AlControlPanel {
    'boundingBoxVisible': boolean;
    'displayMode': DisplayMode;
    'optionsEnabled': boolean;
    'optionsVisible': boolean;
    'orientation': Orientation;
    'selectedTool': string | null;
    'slicesIndex': number;
    'slicesWindowCenter': number;
    'slicesWindowWidth': number;
    'stack': any;
    'stackHelper': AMI.StackHelper;
    'tools': AlToolSerial[];
    'toolsEnabled': boolean;
    'toolsVisible': boolean;
    'volumeSteps': number;
    'volumeWindowCenter': number;
    'volumeWindowWidth': number;
  }
  interface AlControlPanelAttributes extends StencilHTMLAttributes {
    'boundingBoxVisible'?: boolean;
    'displayMode'?: DisplayMode;
    'onOnSetBoundingBoxVisible'?: (event: CustomEvent) => void;
    'onOnSetDisplayMode'?: (event: CustomEvent) => void;
    'onOnSetOptionsEnabled'?: (event: CustomEvent) => void;
    'onOnSetOrientation'?: (event: CustomEvent) => void;
    'onOnSetSlicesIndex'?: (event: CustomEvent) => void;
    'onOnSetSlicesWindowCenter'?: (event: CustomEvent) => void;
    'onOnSetSlicesWindowWidth'?: (event: CustomEvent) => void;
    'onOnSetToolsEnabled'?: (event: CustomEvent) => void;
    'onOnSetVolumeSteps'?: (event: CustomEvent) => void;
    'onOnSetVolumeWindowCenter'?: (event: CustomEvent) => void;
    'onOnSetVolumeWindowWidth'?: (event: CustomEvent) => void;
    'optionsEnabled'?: boolean;
    'optionsVisible'?: boolean;
    'orientation'?: Orientation;
    'selectedTool'?: string | null;
    'slicesIndex'?: number;
    'slicesWindowCenter'?: number;
    'slicesWindowWidth'?: number;
    'stack'?: any;
    'stackHelper'?: AMI.StackHelper;
    'tools'?: AlToolSerial[];
    'toolsEnabled'?: boolean;
    'toolsVisible'?: boolean;
    'volumeSteps'?: number;
    'volumeWindowCenter'?: number;
    'volumeWindowWidth'?: number;
  }

  interface AlToolEditor {
    'tool': AlToolSerial | null;
  }
  interface AlToolEditorAttributes extends StencilHTMLAttributes {
    'onOnRemoveTool'?: (event: CustomEvent) => void;
    'tool'?: AlToolSerial | null;
  }

  interface AlToolList {
    'selectedTool': string | null;
    'tools': AlToolSerial[];
  }
  interface AlToolListAttributes extends StencilHTMLAttributes {
    'onOnSelectedToolChanged'?: (event: CustomEvent) => void;
    'selectedTool'?: string | null;
    'tools'?: AlToolSerial[];
  }

  interface UvAleph {
    'debug': boolean;
    'dracoDecoderPath': string | null;
    'height': string;
    'load': (src: string) => Promise<void>;
    'loadTools': (tools: AlToolSerial[]) => Promise<void>;
    'selectTool': (toolId: string) => Promise<void>;
    'setBoundingBoxVisible': (visible: boolean) => Promise<void>;
    'setDisplayMode': (displayMode: DisplayMode) => Promise<void>;
    'setToolsEnabled': (enabled: boolean) => Promise<void>;
    'spinnerColor': string;
    'width': string;
  }
  interface UvAlephAttributes extends StencilHTMLAttributes {
    'debug'?: boolean;
    'dracoDecoderPath'?: string | null;
    'height'?: string;
    'onOnLoad'?: (event: CustomEvent) => void;
    'onOnSave'?: (event: CustomEvent) => void;
    'onOnSelectedToolChanged'?: (event: CustomEvent) => void;
    'onOnToolsChanged'?: (event: CustomEvent) => void;
    'spinnerColor'?: string;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AlControlPanel': Components.AlControlPanel;
    'AlToolEditor': Components.AlToolEditor;
    'AlToolList': Components.AlToolList;
    'UvAleph': Components.UvAleph;
  }

  interface StencilIntrinsicElements {
    'al-control-panel': Components.AlControlPanelAttributes;
    'al-tool-editor': Components.AlToolEditorAttributes;
    'al-tool-list': Components.AlToolListAttributes;
    'uv-aleph': Components.UvAlephAttributes;
  }


  interface HTMLAlControlPanelElement extends Components.AlControlPanel, HTMLStencilElement {}
  var HTMLAlControlPanelElement: {
    prototype: HTMLAlControlPanelElement;
    new (): HTMLAlControlPanelElement;
  };

  interface HTMLAlToolEditorElement extends Components.AlToolEditor, HTMLStencilElement {}
  var HTMLAlToolEditorElement: {
    prototype: HTMLAlToolEditorElement;
    new (): HTMLAlToolEditorElement;
  };

  interface HTMLAlToolListElement extends Components.AlToolList, HTMLStencilElement {}
  var HTMLAlToolListElement: {
    prototype: HTMLAlToolListElement;
    new (): HTMLAlToolListElement;
  };

  interface HTMLUvAlephElement extends Components.UvAleph, HTMLStencilElement {}
  var HTMLUvAlephElement: {
    prototype: HTMLUvAlephElement;
    new (): HTMLUvAlephElement;
  };

  interface HTMLElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement
    'al-tool-editor': HTMLAlToolEditorElement
    'al-tool-list': HTMLAlToolListElement
    'uv-aleph': HTMLUvAlephElement
  }

  interface ElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement;
    'al-tool-editor': HTMLAlToolEditorElement;
    'al-tool-list': HTMLAlToolListElement;
    'uv-aleph': HTMLUvAlephElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
