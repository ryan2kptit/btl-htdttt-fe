const diabetesDataArr = [
  {
    disease: "no",
    parent: "",
    habit: [
    ],
    cause: [],
    symptom: [],
    diagnose: "Bạn không mắc tiểu đường",
    adviceTitle:
      "Bạn không mắc bệnh tiểu đường, chúng tôi có một số lời khuyên giúp bạn sẽ tránh được bệnh tiểu đường trong tương lại: ",
    advice: [
      "Khát nước và đi tiểu nhiều lần do dư thừa glucose trong cơ thể. Bạn nên ăn ít đồ ăn có chứa glucozo như nước sốt và gia vị",
      "Bạn nên ăn ít đồ ăn có chứa glucozo, nên thường xuyên tập thể dục, ngủ đúng giờ, tránh thuốc lá, rượu bia.",
    ],
  },
  {
    disease: "no",
    parent: "",
    habit: [
     
    ],
    cause: ["reason2", "reason3"],
    symptom: [
     
    ],
    diagnose: "Bạn bị tiểu đường loại I",
    adviceTitle:
      "Bây giờ bạn đã mắc bệnh tiểu đường loại I bạn phải đảm bảo rằng bạn kiểm soát được bệnh tiểu đường của mình đúng. Chúng tôi có một số lời khuyên giúp bạn cải thiện tình trạng của mình: ",
    advice: [
      "Bạn nên có một chế độ ăn uống hợp lý, khoa học: Chế độ ăn quyết định rất nhiều đến sự kiểm soát của đường huyết. Một chế độ ăn thích hợp với những đường chất không thừa không thiếu cho cơ thể sẽ hạn chế được nguy cơ tăng hay giảm đường huyết.",
      "Thường xuyên tập thể dục thể thao: Chế độ luyện tập cho người bệnh tiểu đường rất quan trọng, giúp kiểm soát đường huyết và ngăn ngừa các biến chứng của bệnh. Tập luyện thể dục giúp tiêu thụ đường trong máu, có tác dụng làm giảm đường huyết.",
      "Giữ cân  nặng hợp lý: Nếu bạn đang bị thừa cân, giảm cân là cách hỗ trợ điều trị và kiểm soát đường huyết hiệu quả. Giảm cân giúp làm giảm lượng đường và mỡ trong máu, cơ thể sẽ giảm khả năng đề kháng với insulin. Đồng thời, giảm cân còn giúp ổn định huyết áp, giảm áp lực lên các khớp hông và khớp gối.",
      "Từ bỏ thói quen xấu: Bạn nên giảm thiểu và dần loại bỏ những thói quen xấu này vì nó gia tăng mức độ nặng của bệnh tiểu đường: Sử dụng đồ uống có ga, bỏ bữa sáng, sử dụng chất béo bão hòa, ăn ít rau – hoa quả, thức đêm, ít vận động.",
      "Hãy ngủ đủ giấc: Ngủ quá nhiều hoặc quá ít có thể làm tăng cảm giác ngon miệng, thèm ăn thực phẩm giàu carbonhydrat và làm thay đổi giờ giấc ăn uống. Điều này có thể dẫn đến tăng cân, tăng đường huyết, tăng các biến chứng của bệnh như các biến chứng tim mạch… Bạn nên ngủ 7-8h mỗi đêm.",
      "Theo dõi, kiểm tra đường huyết thường xuyên: Theo dõi những biến động của đường huyết và có những biện pháp kiểm soát kịp thời, từ đó mới duy trì được đường huyết ổn định.",
    ],
  },
  {
    disease: "yes",
    parent: "",
    habit: [],
    cause: [],
    symptom: [
     
    ],
    diagnose: "Bạn bị tiểu đường loại II",
    adviceTitle:
      "Bây giờ bạn đã mắc bệnh tiểu đường loại II bạn phải đảm bảo rằng bạn kiểm soát được bệnh tiểu đường của mình đúng. Chúng tôi có một số lời khuyên để giúp bạn cải thiện tình trạng của mình: ",
    advice: [
      "Bạn nên có một chế độ ăn uống hợp lý, khoa học: Chế độ ăn quyết định rất nhiều đến sự kiểm soát của đường huyết. Một chế độ ăn thích hợp với những đường chất không thừa không thiếu cho cơ thể sẽ hạn chế được nguy cơ tăng hay giảm đường huyết.",
      "Thường xuyên tập thể dục thể thao: Chế độ luyện tập cho người bệnh tiểu đường rất quan trọng, giúp kiểm soát đường huyết và ngăn ngừa các biến chứng của bệnh. Tập luyện thể dục giúp tiêu thụ đường trong máu, có tác dụng làm giảm đường huyết.",
      "Giữ cân  nặng hợp lý: Nếu bạn đang bị thừa cân, giảm cân là cách hỗ trợ điều trị và kiểm soát đường huyết hiệu quả. Giảm cân giúp làm giảm lượng đường và mỡ trong máu, cơ thể sẽ giảm khả năng đề kháng với insulin. Đồng thời, giảm cân còn giúp ổn định huyết áp, giảm áp lực lên các khớp hông và khớp gối.",
      "Từ bỏ thói quen xấu: Bạn nên giảm thiểu và dần loại bỏ những thói quen xấu này vì nó gia tăng mức độ nặng của bệnh tiểu đường: Sử dụng đồ uống có ga, bỏ bữa sáng, sử dụng chất béo bão hòa, ăn ít rau – hoa quả, thức đêm, ít vận động.",
      "Hãy ngủ đủ giấc: Ngủ quá nhiều hoặc quá ít có thể làm tăng cảm giác ngon miệng, thèm ăn thực phẩm giàu carbonhydrat và làm thay đổi giờ giấc ăn uống. Điều này có thể dẫn đến tăng cân, tăng đường huyết, tăng các biến chứng của bệnh như các biến chứng tim mạch… Bạn nên ngủ 7-8h mỗi đêm.",
      "Theo dõi, kiểm tra đường huyết thường xuyên: Theo dõi những biến động của đường huyết và có những biện pháp kiểm soát kịp thời, từ đó mới duy trì được đường huyết ổn định.",
    ],
  },
  {
    disease: "",
    parent: "",
    habit: [],
    cause: [
    ],
    symptom: [
    ],
    diagnose: "Bạn bị tiểu đường thai kỳ",
    adviceTitle:
      "Bây giờ bạn đã mắc bệnh tiểu đường thai kỳ bạn phải đảm bảo rằng bạn kiểm soát được bệnh tiểu đường của mình đúng. Chúng tôi có một số lời khuyên để giúp bạn cải thiện tình trạng của mình: ",
    advice: [
      "Chế độ ăn uống lành mạnh: Cắt giảm thức ăn có đường nên được ưu tiên. Nên hạn chế mức tiêu thụ bánh ngọt, bánh kẹo, đồ uống có đường và đồ uống nhiều đường ở mức tối thiểu hoặc cắt bỏ hoàn toàn. Thực phẩm giàu calo bao gồm thức ăn chế biến sẵn và thức ăn nhanh cũng nên tránh.",
      "Tập thể dục thường xuyên: Thông thường, tập thể dục thường xuyên đi kèm với nhiều lợi ích về thể chất và tinh thần. Nó thậm chí còn trở nên quan trọng hơn khi bạn mang thai. Hoạt động thể chất giúp cơ thể chuẩn bị cho việc mang thai và giúp ổn định huyết áp và tốc độ trao đổi chất. Nó cũng giúp cải thiện và duy trì chức năng tim mạch. Người ta quan sát thấy rằng những phụ nữ tập thể dục ít nhất 4 giờ mỗi tuần có nguy cơ mắc bệnh tiểu đường thai kỳ thấp hơn 76%.",
      "Giảm cân: Phụ nữ có Chỉ số khối cơ thể từ 30 trở lên có nguy cơ mắc bệnh tiểu đường thai kỳ cao gấp ba lần so với phụ nữ có chỉ số BMI thấp hơn 25. Vì vậy, giảm cân trước khi mang thai rất được khuyến khích.",
      "Kiểm tra đường huyết thường xuyên: Để biết chắc đường huyết được kiểm soát tốt hay chưa, nếu chỉ thử đường huyết lúc đói khi mới ngủ dậy là chưa đủ, bạn nên thử đường huyết trước bữa ăn chính và sau ăn 1-2 giờ. Mục tiêu đường huyết lúc đói và trước bữa ăn là dưới 95 mg/dl, còn mục tiêu đường huyết 1 giờ sau ăn ít hơn 140 mg/dl, đường huyết 2 giờ sau ăn ít hơn 120 mg/dl.",
      "Ngủ đủ giấc: Giấc ngủ ngon tác động tích cực đến sức khẻo của người mẹ. Các nghiên cứu cho thấy mất ngủ là một dấu hiệu của trầm cảm và điều này hoàn toàn không tốt cho việc điều trị đái tháo đường.",
    ],
  },
];

export default diabetesDataArr;
