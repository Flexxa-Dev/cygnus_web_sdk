export namespace paymentStyles {
    namespace modalOverlay {
        let position: string;
        let top: number;
        let left: number;
        let width: string;
        let height: string;
        let backgroundColor: string;
        let display: string;
        let justifyContent: string;
        let alignItems: string;
        let zIndex: number;
        let backdropFilter: string;
        let overflow: string;
        let padding: string;
        let isolation: string;
    }
    namespace modalContent {
        let backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        let padding_1: string;
        export { padding_1 as padding };
        export let borderRadius: string;
        let width_1: string;
        export { width_1 as width };
        export let maxWidth: string;
        export let maxHeight: string;
        let position_1: string;
        export { position_1 as position };
        export let boxShadow: string;
        export let animation: string;
        export let margin: string;
        let display_1: string;
        export { display_1 as display };
        export let flexDirection: string;
        let isolation_1: string;
        export { isolation_1 as isolation };
    }
    namespace modalHeader {
        let display_2: string;
        export { display_2 as display };
        let flexDirection_1: string;
        export { flexDirection_1 as flexDirection };
        export let gap: string;
        let padding_2: string;
        export { padding_2 as padding };
        let backgroundColor_2: string;
        export { backgroundColor_2 as backgroundColor };
        let borderRadius_1: string;
        export { borderRadius_1 as borderRadius };
        export let color: string;
        export let transition: string;
    }
    namespace title {
        let margin_1: string;
        export { margin_1 as margin };
        export let fontSize: string;
        let color_1: string;
        export { color_1 as color };
        export let fontWeight: number;
        export let letterSpacing: string;
    }
    let closeButton: {
        background: string;
        border: string;
        fontSize: string;
        cursor: string;
        color: string;
        width: string;
        height: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        borderRadius: string;
        transition: string;
        '&:hover': {
            backgroundColor: string;
            transform: string;
        };
        '&[disabled]': {
            opacity: number;
            visibility: string;
            pointerEvents: string;
        };
    };
    namespace paymentElement {
        let padding_3: string;
        export { padding_3 as padding };
        export let background: string;
        export let flex: number;
        let overflow_1: string;
        export { overflow_1 as overflow };
        export let minHeight: string;
    }
    namespace payButton {
        let width_2: string;
        export { width_2 as width };
        let padding_4: string;
        export { padding_4 as padding };
        let backgroundColor_3: string;
        export { backgroundColor_3 as backgroundColor };
        let color_2: string;
        export { color_2 as color };
        export let border: string;
        let borderRadius_2: string;
        export { borderRadius_2 as borderRadius };
        let fontSize_1: string;
        export { fontSize_1 as fontSize };
        let fontWeight_1: number;
        export { fontWeight_1 as fontWeight };
        export let cursor: string;
        let transition_1: string;
        export { transition_1 as transition };
        let position_2: string;
        export { position_2 as position };
        export let bottom: number;
        export let borderTop: string;
    }
    namespace loader {
        namespace container {
            let display_3: string;
            export { display_3 as display };
            let flexDirection_2: string;
            export { flexDirection_2 as flexDirection };
            let alignItems_1: string;
            export { alignItems_1 as alignItems };
            let justifyContent_1: string;
            export { justifyContent_1 as justifyContent };
            let height_1: string;
            export { height_1 as height };
            let padding_5: string;
            export { padding_5 as padding };
        }
        namespace spinner {
            let width_3: string;
            export { width_3 as width };
            let height_2: string;
            export { height_2 as height };
            let border_1: string;
            export { border_1 as border };
            let borderTop_1: string;
            export { borderTop_1 as borderTop };
            let borderRadius_3: string;
            export { borderRadius_3 as borderRadius };
            let animation_1: string;
            export { animation_1 as animation };
            export let marginBottom: string;
        }
        namespace text {
            let color_3: string;
            export { color_3 as color };
            let margin_2: string;
            export { margin_2 as margin };
            let fontSize_2: string;
            export { fontSize_2 as fontSize };
        }
    }
    namespace statusModal {
        export namespace container_1 {
            let display_4: string;
            export { display_4 as display };
            let flexDirection_3: string;
            export { flexDirection_3 as flexDirection };
            let alignItems_2: string;
            export { alignItems_2 as alignItems };
            let justifyContent_2: string;
            export { justifyContent_2 as justifyContent };
            let padding_6: string;
            export { padding_6 as padding };
            export let textAlign: string;
            let animation_2: string;
            export { animation_2 as animation };
            let backgroundColor_4: string;
            export { backgroundColor_4 as backgroundColor };
            let borderRadius_4: string;
            export { borderRadius_4 as borderRadius };
            let boxShadow_1: string;
            export { boxShadow_1 as boxShadow };
        }
        export { container_1 as container };
        export namespace icon {
            namespace wrapper {
                let display_5: string;
                export { display_5 as display };
                let alignItems_3: string;
                export { alignItems_3 as alignItems };
                let justifyContent_3: string;
                export { justifyContent_3 as justifyContent };
                let width_4: string;
                export { width_4 as width };
                let height_3: string;
                export { height_3 as height };
                let marginBottom_1: string;
                export { marginBottom_1 as marginBottom };
                let borderRadius_5: string;
                export { borderRadius_5 as borderRadius };
            }
            namespace success {
                let backgroundColor_5: string;
                export { backgroundColor_5 as backgroundColor };
                let color_4: string;
                export { color_4 as color };
            }
            namespace error {
                let backgroundColor_6: string;
                export { backgroundColor_6 as backgroundColor };
                let color_5: string;
                export { color_5 as color };
            }
        }
        export namespace title_1 {
            let margin_3: string;
            export { margin_3 as margin };
            let fontSize_3: string;
            export { fontSize_3 as fontSize };
            let fontWeight_2: string;
            export { fontWeight_2 as fontWeight };
        }
        export { title_1 as title };
        export namespace titleSuccess {
            let color_6: string;
            export { color_6 as color };
        }
        export namespace titleError {
            let color_7: string;
            export { color_7 as color };
        }
        export namespace message {
            let margin_4: string;
            export { margin_4 as margin };
            let fontSize_4: string;
            export { fontSize_4 as fontSize };
            let color_8: string;
            export { color_8 as color };
            export let lineHeight: string;
        }
    }
    let animations: string;
    namespace paymentDetails {
        let display_6: string;
        export { display_6 as display };
        let flexDirection_4: string;
        export { flexDirection_4 as flexDirection };
        let gap_1: string;
        export { gap_1 as gap };
    }
    namespace companyName {
        let fontSize_5: string;
        export { fontSize_5 as fontSize };
        let fontWeight_3: string;
        export { fontWeight_3 as fontWeight };
        let letterSpacing_1: string;
        export { letterSpacing_1 as letterSpacing };
        let margin_5: number;
        export { margin_5 as margin };
        let flex_1: number;
        export { flex_1 as flex };
        let color_9: string;
        export { color_9 as color };
    }
    namespace headerTopRow {
        let display_7: string;
        export { display_7 as display };
        let justifyContent_4: string;
        export { justifyContent_4 as justifyContent };
        let alignItems_4: string;
        export { alignItems_4 as alignItems };
        let width_5: string;
        export { width_5 as width };
    }
    namespace headerBottomRow {
        let display_8: string;
        export { display_8 as display };
        let alignItems_5: string;
        export { alignItems_5 as alignItems };
        let gap_2: string;
        export { gap_2 as gap };
        let fontSize_6: string;
        export { fontSize_6 as fontSize };
        export let opacity: number;
        let color_10: string;
        export { color_10 as color };
    }
    namespace paymentInfo {
        let display_9: string;
        export { display_9 as display };
        let alignItems_6: string;
        export { alignItems_6 as alignItems };
        let gap_3: string;
        export { gap_3 as gap };
        let fontSize_7: string;
        export { fontSize_7 as fontSize };
        let flexDirection_5: string;
        export { flexDirection_5 as flexDirection };
        let color_11: string;
        export { color_11 as color };
    }
    namespace orderId {
        let fontWeight_4: string;
        export { fontWeight_4 as fontWeight };
        let color_12: string;
        export { color_12 as color };
    }
    namespace amountDivider {
        let color_13: string;
        export { color_13 as color };
        let opacity_1: number;
        export { opacity_1 as opacity };
    }
    namespace amount {
        let fontWeight_5: string;
        export { fontWeight_5 as fontWeight };
        let color_14: string;
        export { color_14 as color };
    }
}
