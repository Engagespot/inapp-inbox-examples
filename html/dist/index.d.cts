import * as react_jsx_runtime from 'react/jsx-runtime';
import { EngagespotChannels, EngagespotNotification, EventCallbackMap, EngagespotProviderProps } from '@engagespot/react-hooks';
export * from '@engagespot/react-hooks';
import React, { ReactNode, MouseEvent as MouseEvent$1 } from 'react';
import { EventListenersToRun, ActionableElements } from '@engagespot/template-blocks';
import { ToasterProps, toast, ExternalToast } from 'sonner';
import { DeepPartial } from '@engagespot/utils';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

type TextOverrides = {
    header: {
        headerText: string;
        preferenceText: string;
        dropdownItems: {
            preferences: string;
            enableDesktopNotifications: string;
            markAllAsRead: string;
            deleteAll: string;
        };
    };
    notification: {
        dropdownItems: {
            markAsRead: string;
            delete: string;
        };
    };
    channels: {
        [key in EngagespotChannels]: string;
    };
    preferenceModal: {
        heading: string;
        text: string;
        yesButtonText: string;
        noButtonText: string;
        secondaryText: string;
    };
    notificationFeed: {
        placeholderText: string;
    };
};
type TextOverridesPartial = DeepPartial<TextOverrides>;

declare const _default: {
    colors: {
        brandingPrimary: string;
        colorPrimary: string;
        colorSecondary: string;
    };
    panel: {
        boxShadow: string;
        width: string;
        height: string;
        borderBottomLeftRadius: string;
        borderBottomRightRadius: string;
        borderTopLeftRadius: string;
        borderTopRightRadius: string;
        arrowSize: string;
        arrowInset: string;
    };
    feed: {
        background: string;
        placeholderTextColor: string;
        height: string;
        placeholderTextSize: string;
        placeholderMargin: string;
        placeholderFontWeight: string;
    };
    feedItem: {
        border: string;
        background: string;
        notificationDot: string;
        hoverBackground: string;
        headerColor: string;
        descriptionColor: string;
        dateColor: string;
        placeHolderBackground: string;
        placeHolderGradient: string;
        height: string;
        padding: string;
        placeholderTextSize: string;
        notificationDotSize: string;
        imageSize: string;
        imageRadius: string;
        hoverTransition: string;
        textContentPadding: string;
        textContentMargin: string;
        headerFontWeight: string;
        headerSize: string;
        headerPadding: string;
        descriptionSize: string;
        descriptionPadding: string;
        dateSize: string;
        menuMargin: string;
    };
    notificationButton: {
        background: string;
        hoverBackground: string;
        iconFill: string;
        floatingButtonShadow: string;
        iconSize: string;
        outline: string;
        margin: string;
        padding: string;
        borderWidth: string;
        normalButtonRadius: string;
        floatingButtonRadius: string;
        transition: string;
    };
    unreadBadgeCount: {
        background: string;
        color: string;
        borderRadius: string;
        fontSize: string;
        inset: string;
        size: string;
    };
    headerDropdown: {
        iconFill: string;
        background: string;
        hoverBackground: string;
        menuBackground: string;
        menuShadow: string;
        menuItemTextColor: string;
        menuItemHoverBackground: string;
        iconWidth: string;
        iconHeight: string;
        margin: string;
        padding: string;
        borderWidth: string;
        outline: string;
        transition: string;
        menuBorderRadius: string;
        menuItemPadding: string;
    };
    dropdown: {
        iconFill: string;
        background: string;
        hoverBackground: string;
        menuBackground: string;
        menuShadow: string;
        menuItemTextColor: string;
        menuItemHoverBackground: string;
        iconWidth: string;
        iconHeight: string;
        margin: string;
        padding: string;
        borderWidth: string;
        outline: string;
        transition: string;
        menuBorderRadius: string;
        menuItemPadding: string;
    };
    jumpToTop: {
        background: string;
        iconFill: string;
        shadow: string;
        iconSize: string;
        inset: string;
        borderRadius: string;
        padding: string;
        margin: string;
        transition: string;
    };
    header: {
        fontColor: string;
        closeButtonBackground: string;
        fontSize: string;
        fontWeight: string;
        height: string;
        closeButtonColor: string;
        padding: string;
        closeButtonOutline: string;
        closeButtonPadding: string;
        closeButtonFontSize: string;
        closeButtonMargin: string;
        lineHeight: string;
    };
    footer: {
        background: string;
        fontColor: string;
        preferenceButtonColor: string;
        border: string;
        preferenceButtonHoverBackground: string;
        fontWeight: string;
        height: string;
        padding: string;
        fontSize: string;
        linkMargin: string;
        linkSize: string;
        preferenceButtonMargin: string;
        preferenceButtonSize: string;
        preferenceButtonPadding: string;
        preferenceButtonHoverTransition: string;
        linkRadius: string;
    };
    toggle: {
        background: string;
        activeColor: string;
        dotColor: string;
    };
    preference: {
        fontColor: string;
        background: string;
        height: string;
        fontWeight: string;
        padding: string;
        fontSize: string;
    };
    preferenceModal: {
        overlayBackground: string;
        headingColor: string;
        background: string;
        closeButtonColor: string;
        textPrimaryColor: string;
        textSecondaryColor: string;
        buttonPrimaryColor: string;
        buttonPrimaryBackgroundColor: string;
        buttonPrimaryHoverBackgroundColor: string;
        buttonSecondaryColor: string;
        buttonSecondaryBackgroundColor: string;
        buttonSecondaryHoverBackgroundColor: string;
        overlayOpacity: string;
        height: string;
        backdropFilter: string;
        borderRadius: string;
        padding: string;
        textAlign: string;
        headerMargin: string;
        headerFontSize: string;
        closeButtonSize: string;
        textPrimaryMargin: string;
        textPrimaryFontSize: string;
        textSecondaryMargin: string;
        textSecondaryFontSize: string;
        primaryButtonFontWeight: string;
        primaryButtonPadding: string;
        primaryButtonBorderRadius: string;
        primaryButtonMargin: string;
        primaryButtonTransition: string;
    };
    tab: {
        gap: string;
        background: string;
        borderBottom: string;
        buttonColor: string;
        buttonBackground: string;
        buttonBorder: string;
        buttonHoverColor: string;
        buttonPadding: string;
        buttonActiveColor: string;
        buttonFontSize: string;
        buttonFontWeight: string;
        buttonActiveFontWeight: string;
        buttonActiveIndicatorHeight: string;
        buttonActiveIndicatorBackground: string;
        buttonActiveIndicatorTransition: string;
        scrollButtonWidth: string;
        scrollButtonHeight: string;
        scrollButtonBackground: string;
        scrollButtonFontSize: string;
        scrollButtonColor: string;
        scrollButtonDisabledColor: string;
        scrollButtonBorder: string;
        scrollButtonHoverColor: string;
        scrollButtonHoverBackground: string;
    };
    actionableElement: {
        button: {
            primaryButtonBorderRadius: string;
            primaryButtonPadding: string;
            primaryButtonFontWeight: string;
            primaryButtonFontSize: string;
            primaryButtonBackground: string;
            primaryButtonHoverBackground: string;
            primaryButtonColor: string;
            primaryButtonMargin: string;
            primaryButtonBorder: string;
            primaryButtonTransition: string;
            secondaryButtonBorderRadius: string;
            secondaryButtonPadding: string;
            secondaryButtonFontWeight: string;
            secondaryButtonFontSize: string;
            secondaryButtonBackground: string;
            secondaryButtonHoverBackground: string;
            secondaryButtonColor: string;
            secondaryButtonMargin: string;
            secondaryButtonBorder: string;
            secondaryButtonTransition: string;
        };
        image: {
            height: string;
            objectFit: string;
        };
        ratingStar: {
            size: string;
        };
        textArea: {
            fontSize: string;
            padding: string;
            borderRadius: string;
            border: string;
            maxHeight: string;
            resize: string;
            outline: string;
            width: string;
            overflow: string;
            focusBorderColor: string;
            background: string;
            color: string;
            lineHeight: string;
        };
    };
};

type Theme = typeof _default;
type ThemeOverrides = DeepPartial<Theme>;

type DropdownMenuProps = {
    items: {
        name: string;
        action: () => unknown;
    }[];
    isVisible: boolean;
    theme: (typeof _default)['dropdown'];
};

type NotificationFeedItemProps = {
    notification: EngagespotNotification;
};

type customNotificationContentType = ((notification: NotificationFeedItemProps) => ReactNode) | undefined;

declare const dateFunctions: {
    format: typeof format;
    formatDistance: typeof formatDistance;
    formatRelative: typeof formatRelative;
    subDays: typeof subDays;
};

type defaultRenderFn = (...args: unknown[]) => ReactNode | string;
type customRenderFn<T = defaultRenderFn> = T | undefined;
type NotificationReceiveEvent = {
    notification: EngagespotNotification;
};
type ClickableNotificationPayload = {
    url?: string | null;
    id: number;
    markAsClicked: () => void;
};
type onFeedItemClickType = (evt: MouseEvent$1<HTMLDivElement, MouseEvent>, payload: ClickableNotificationPayload) => void;
type PanelProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    disableDismiss?: boolean;
};
type ToastProps = {
    enableToast: boolean;
    toasterProps: Partial<ToasterProps>;
    toastProps: {
        renderToast?: (prop: {
            notificationReceiveEvent: NotificationReceiveEvent;
            toast: typeof toast;
        }) => void;
        message?: (notificationReceiveEvent: NotificationReceiveEvent) => string;
        description?: (notificationReceiveEvent: NotificationReceiveEvent) => string;
        options?: (notificationReceiveEvent: NotificationReceiveEvent) => Omit<ExternalToast, 'description'>;
    };
};
type EngagespotInternalProps = {
    /**
     * Custom theme settings to override default styling, allowing specific colors, fonts, and layout modifications
     */
    theme: ThemeOverrides;
    /**
     * Determines if the notification panel should be open when the component loads for the first time
     */
    panelOpenByDefault: boolean;
    /**
     * Enables panel-only mode, hiding other components and displaying just the notification panel
     */
    panelOnly: boolean;
    /**
     * Default image shown when a notification feed item has no specific image available
     */
    feedItemPlaceholderImage: string;
    /**
     * When set to true, hides the avatar associated with each notification in the feed
     */
    hideNotificationAvatar: boolean;
    /**
     * Toggles visibility of a button that scrolls to the top of the feed when clicked
     */
    hideJumpToTop: boolean;
    /**
     * Text displayed in the panel header
     */
    headerText: string;
    /**
     * Custom render function for the footer content within the notification panel, allowing for specific content or links
     */
    renderFooterContent: customRenderFn;
    /**
     * Custom render function for the main notification icon, enabling the use of a unique icon design
     */
    renderNotificationIcon: customRenderFn;
    /**
     * Custom render function for an empty state image, displayed when there are no notifications available
     */
    renderEmptyPlaceholderImage: customRenderFn;
    /**
     * Function triggered when a notification feed item is clicked, handling navigation or actions
     */
    onFeedItemClick: onFeedItemClickType;
    /**
     * Allows overriding default text used across the notification panel for more specific terminology or localization
     */
    textOverrides: TextOverridesPartial;
    /**
     * Custom render function for each notification item, allowing detailed customization of the notification's content display
     */
    renderNotificationContent: customRenderFn<customNotificationContentType>;
    /**
     * Custom render function specifically for the notification body, allowing more granular control over notification text or components
     */
    renderNotificationBody: customRenderFn<customNotificationContentType>;
    /**
     * List of event listeners that should be active within the notification panel, defining events and actions to run when triggered
     */
    eventListenersToRun: EventListenersToRun[];
    /**
     * Custom dropdown menu items available in the panel header, providing quick access to settings or filtering options
     */
    headerDropdownItems: DropdownMenuProps['items'];
    /**
     * A function to format dates within notifications, accepting a date string and a date utility library for custom formats
     */
    formatDate: (dateString: string, dateFns: typeof dateFunctions) => string;
    /**
     * Disables the notification chime sound when a new notification arrives, defauls to true
     */
    disableNotificationChime: boolean;
    /**
     * The source URL or path to the audio file used for the notification chime sound
     */
    notificationChimeSrc: string;
    /**
     * Properties for the floating panel
     */
    panel: PanelProps;
    /**
     * When enabled, prevents automatic translation of text within the notification panel, useful for non-translatable text
     */
    disableTextTranslation: boolean;
    /**
     * Properties for configuring toast notifications, partially overriding default settings like position and duration
     */
    toast: Partial<ToastProps>;
    /**
     * If true, hides the category tabs within the notification panel, displaying all notifications in a single feed
     */
    hideCategoryTabs: boolean;
    /**
     * Enables an error boundary around the notification panel, capturing and handling unexpected errors within the component
     */
    enableErrorBoundary: boolean;
    /**
     * Dynamically edit users profile attributes
     */
    profile?: {
        [attribute: string]: any;
    };
    /**
     * Listen to notification events from the store instance and pass them a callback function
     */
    events?: Partial<EventCallbackMap>;
    /**
     * Custom elements to be displayed in the notification panel, allowing for additional interactive elements
     */
    actionableElements?: Partial<ActionableElements>;
};

type EngagespotProps = Partial<EngagespotInternalProps> & EngagespotProviderProps['options'];
declare const EngagespotProvider: (props: EngagespotProps & {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare function EngagespotCore(): react_jsx_runtime.JSX.Element;
declare function Engagespot(props: EngagespotProps): react_jsx_runtime.JSX.Element;

declare const _internals: {
    EngagespotStyled: any;
    themeConfig: {
        colors: {
            brandingPrimary: string;
            colorPrimary: string;
            colorSecondary: string;
        };
        panel: {
            boxShadow: string;
            width: string;
            height: string;
            borderBottomLeftRadius: string;
            borderBottomRightRadius: string;
            borderTopLeftRadius: string;
            borderTopRightRadius: string;
            arrowSize: string;
            arrowInset: string;
        };
        feed: {
            background: string;
            placeholderTextColor: string;
            height: string;
            placeholderTextSize: string;
            placeholderMargin: string;
            placeholderFontWeight: string;
        };
        feedItem: {
            border: string;
            background: string;
            notificationDot: string;
            hoverBackground: string;
            headerColor: string;
            descriptionColor: string;
            dateColor: string;
            placeHolderBackground: string;
            placeHolderGradient: string;
            height: string;
            padding: string;
            placeholderTextSize: string;
            notificationDotSize: string;
            imageSize: string;
            imageRadius: string;
            hoverTransition: string;
            textContentPadding: string;
            textContentMargin: string;
            headerFontWeight: string;
            headerSize: string;
            headerPadding: string;
            descriptionSize: string;
            descriptionPadding: string;
            dateSize: string;
            menuMargin: string;
        };
        notificationButton: {
            background: string;
            hoverBackground: string;
            iconFill: string;
            floatingButtonShadow: string;
            iconSize: string;
            outline: string;
            margin: string;
            padding: string;
            borderWidth: string;
            normalButtonRadius: string;
            floatingButtonRadius: string;
            transition: string;
        };
        unreadBadgeCount: {
            background: string;
            color: string;
            borderRadius: string;
            fontSize: string;
            inset: string;
            size: string;
        };
        headerDropdown: {
            iconFill: string;
            background: string;
            hoverBackground: string;
            menuBackground: string;
            menuShadow: string;
            menuItemTextColor: string;
            menuItemHoverBackground: string;
            iconWidth: string;
            iconHeight: string;
            margin: string;
            padding: string;
            borderWidth: string;
            outline: string;
            transition: string;
            menuBorderRadius: string;
            menuItemPadding: string;
        };
        dropdown: {
            iconFill: string;
            background: string;
            hoverBackground: string;
            menuBackground: string;
            menuShadow: string;
            menuItemTextColor: string;
            menuItemHoverBackground: string;
            iconWidth: string;
            iconHeight: string;
            margin: string;
            padding: string;
            borderWidth: string;
            outline: string;
            transition: string;
            menuBorderRadius: string;
            menuItemPadding: string;
        };
        jumpToTop: {
            background: string;
            iconFill: string;
            shadow: string;
            iconSize: string;
            inset: string;
            borderRadius: string;
            padding: string;
            margin: string;
            transition: string;
        };
        header: {
            fontColor: string;
            closeButtonBackground: string;
            fontSize: string;
            fontWeight: string;
            height: string;
            closeButtonColor: string;
            padding: string;
            closeButtonOutline: string;
            closeButtonPadding: string;
            closeButtonFontSize: string;
            closeButtonMargin: string;
            lineHeight: string;
        };
        footer: {
            background: string;
            fontColor: string;
            preferenceButtonColor: string;
            border: string;
            preferenceButtonHoverBackground: string;
            fontWeight: string;
            height: string;
            padding: string;
            fontSize: string;
            linkMargin: string;
            linkSize: string;
            preferenceButtonMargin: string;
            preferenceButtonSize: string;
            preferenceButtonPadding: string;
            preferenceButtonHoverTransition: string;
            linkRadius: string;
        };
        toggle: {
            background: string;
            activeColor: string;
            dotColor: string;
        };
        preference: {
            fontColor: string;
            background: string;
            height: string;
            fontWeight: string;
            padding: string;
            fontSize: string;
        };
        preferenceModal: {
            overlayBackground: string;
            headingColor: string;
            background: string;
            closeButtonColor: string;
            textPrimaryColor: string;
            textSecondaryColor: string;
            buttonPrimaryColor: string;
            buttonPrimaryBackgroundColor: string;
            buttonPrimaryHoverBackgroundColor: string;
            buttonSecondaryColor: string;
            buttonSecondaryBackgroundColor: string;
            buttonSecondaryHoverBackgroundColor: string;
            overlayOpacity: string;
            height: string;
            backdropFilter: string;
            borderRadius: string;
            padding: string;
            textAlign: string;
            headerMargin: string;
            headerFontSize: string;
            closeButtonSize: string;
            textPrimaryMargin: string;
            textPrimaryFontSize: string;
            textSecondaryMargin: string;
            textSecondaryFontSize: string;
            primaryButtonFontWeight: string;
            primaryButtonPadding: string;
            primaryButtonBorderRadius: string;
            primaryButtonMargin: string;
            primaryButtonTransition: string;
        };
        tab: {
            gap: string;
            background: string;
            borderBottom: string;
            buttonColor: string;
            buttonBackground: string;
            buttonBorder: string;
            buttonHoverColor: string;
            buttonPadding: string;
            buttonActiveColor: string;
            buttonFontSize: string;
            buttonFontWeight: string;
            buttonActiveFontWeight: string;
            buttonActiveIndicatorHeight: string;
            buttonActiveIndicatorBackground: string;
            buttonActiveIndicatorTransition: string;
            scrollButtonWidth: string;
            scrollButtonHeight: string;
            scrollButtonBackground: string;
            scrollButtonFontSize: string;
            scrollButtonColor: string;
            scrollButtonDisabledColor: string;
            scrollButtonBorder: string;
            scrollButtonHoverColor: string;
            scrollButtonHoverBackground: string;
        };
        actionableElement: {
            button: {
                primaryButtonBorderRadius: string;
                primaryButtonPadding: string;
                primaryButtonFontWeight: string;
                primaryButtonFontSize: string;
                primaryButtonBackground: string;
                primaryButtonHoverBackground: string;
                primaryButtonColor: string;
                primaryButtonMargin: string;
                primaryButtonBorder: string;
                primaryButtonTransition: string;
                secondaryButtonBorderRadius: string;
                secondaryButtonPadding: string;
                secondaryButtonFontWeight: string;
                secondaryButtonFontSize: string;
                secondaryButtonBackground: string;
                secondaryButtonHoverBackground: string;
                secondaryButtonColor: string;
                secondaryButtonMargin: string;
                secondaryButtonBorder: string;
                secondaryButtonTransition: string;
            };
            image: {
                height: string;
                objectFit: string;
            };
            ratingStar: {
                size: string;
            };
            textArea: {
                fontSize: string;
                padding: string;
                borderRadius: string;
                border: string;
                maxHeight: string;
                resize: string;
                outline: string;
                width: string;
                overflow: string;
                focusBorderColor: string;
                background: string;
                color: string;
                lineHeight: string;
            };
        };
    };
};

export { Engagespot, EngagespotCore, type EngagespotProps, EngagespotProvider, _internals };
